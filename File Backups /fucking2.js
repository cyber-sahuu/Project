const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "fucking2",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "SHAHADAT SAHU",
  description: "Generate image using sender and target Facebook UID via Avatar Canvas API",
  commandCategory: "admin",
  usePrefix: true,
  usages: "[@mention | reply]",
  cooldowns: 0,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "path": ""
  }
};

module.exports.run = async function ({ event, api }) {
  const { threadID, messageID, senderID, mentions, messageReply } = event;

  let targetID = null;

  if (mentions && Object.keys(mentions).length > 0) {
    targetID = Object.keys(mentions)[0];
  } else if (messageReply && messageReply.senderID) {
    targetID = messageReply.senderID;
  }

  if (!targetID) {
    return api.sendMessage(
      "Please reply or mention someone......",
      threadID,
      messageID
    );
  }

  try {
    const apiList = await axios.get(
      "https://raw.githubusercontent.com/shahadat-sahu/SAHU-API/refs/heads/main/SAHU-API.json"
    );

    const AVATAR_CANVAS_API = apiList.data.AvatarCanvas;

    const res = await axios.post(
      `${AVATAR_CANVAS_API}/api`,
      {
        cmd: "fucking2",
        senderID,
        targetID
      },
      {
        responseType: "arraybuffer",
        timeout: 30000
      }
    );

    const imgPath = path.join(
      __dirname,
      "cache",
      `fucking2_${senderID}_${targetID}.png`
    );

    fs.writeFileSync(imgPath, res.data);

    return api.sendMessage(
      {
        body: "~খানকির মাগী তোরে কলে নিয়ে করব🥵",
        attachment: fs.createReadStream(imgPath)
      },
      threadID,
      () => fs.unlinkSync(imgPath),
      messageID
    );

  } catch (e) {
    return api.sendMessage(
      "API Error Call Boss SAHU",
      threadID,
      messageID
    );
  }
};
