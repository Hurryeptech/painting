const { createSession } = require("./authEnDec");

const SendToken = async (user, res, msg) => {
  let data = {
    status: true,
    message: msg,
  };

  let session = await createSession(user);
  data.session = session;

  return res.status(200).json(data);
};
module.exports = SendToken;
