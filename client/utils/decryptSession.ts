import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import CryptoJS from "crypto-js";
import { JwtPayload } from "jsonwebtoken";

interface CustomJwtPayload extends JwtPayload {
  encryptedData?: string; // Add the encryptedData field
}

const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY || "";

const handleDecrypt = async (encrypted: any) => {
  
  const bytes = CryptoJS.AES.decrypt(encrypted, secretKey);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  // console.log(originalText);
  
  if (originalText) return originalText;
};

export const getSession = async () => {
  const session = Cookies.get("session");

  if (!session) return null;
  const data = jwtDecode<CustomJwtPayload>(session);
  
  const decryptedData = await handleDecrypt(data?.encryptedData);
  
  return decryptedData;
};
export const getInstantSession = async (session: any) => {
  if (!session) return null;
  const data = await jwtDecode<CustomJwtPayload>(session);
  const decryptedData = await handleDecrypt(data?.encryptedData);

  return decryptedData;
};
export const saveCookie = (session: any) => {
  const { name, value, options, key } = session;
  // Set the cookie
  localStorage.setItem("key", key);
  Cookies.set(name, value, {
    path: options.path || "/",
    secure: options.secure || false,
    sameSite: options.sameSite || "Lax",
  });
  // console.log("Cookie set successfully");
};
export const deleteCookie = (session: any) => {
  const { name } = session;
  localStorage.removeItem("key");
  Cookies.remove(name);
};

export const fetchSessionData = async () => {
  const sessionDetails = await getSession();
  if (sessionDetails) {
    return JSON.parse(sessionDetails);
  } else {
    console.log("No session found");
  }
};
