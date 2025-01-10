const { SignJWT, jwtVerify } = require("jose");
const CryptoJS = require("crypto-js");

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

const encryptData = (data) => {
  const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), process.env.SECRET_KEY).toString();
  return ciphertext;
}
function decryptData(ciphertext) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
}

const encrypt = async (payload) => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1 day from now")
    .sign(key);
};

const decrypt = async (input) => {
  try {
    const { payload } = await jwtVerify(input, key, { algorithms: ["HS256"] });
    return payload;
  } catch (error) {
    if (error.code === "ERR_JWT_EXPIRED") {
      console.log("Token expired");
      throw new Error("Token has expired");
    }
    throw error; // For other types of errors
  }
};

const createSession = async (user) => {
  const expires = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
  const encryptedData = encryptData(user)
  const session = await encrypt({ encryptedData, expires }); // user refers to user object
  const data = {
    name: "session",
    value: session,
    options: {
      path: "/",
      // domain: process.env.VERCEL_URL,
      secure: true,
    },
  };
  console.log(data);
  
  return data;
};

const getSession = async (session) => {
  if (!session) return null;
  return await decrypt(session);
};

const updateSession = async (session) => {
  if (!session) return null;
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const data = {
    name: "session",
    value: await encrypt(parsed),
    options: {
      path: "/",
      domain: process.env.PUBLIC_DOMAIN,
      secure: false,
    },
  };
  return data;
};



module.exports = { createSession, getSession, updateSession };
