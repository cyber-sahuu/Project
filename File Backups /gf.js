module.exports.config = {
  name: "gf",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SHAHADAT SAHU",
  description: "couple banner",
  commandCategory: "banner",
  usages: "[@mention | reply]",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "path": ""
  }
};

module.exports.run = async function ({ event, api }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const path = require("path");

  const { threadID, messageID, senderID, mentions, messageReply } = event;

  let targetID = null;

  if (messageReply && messageReply.senderID) {
    targetID = messageReply.senderID;
  } else if (mentions && Object.keys(mentions).length > 0) {
    targetID = Object.keys(mentions)[0];
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
        cmd: "gf",
        senderID,
        targetID
      },
      { responseType: "arraybuffer", timeout: 30000 }
    );

    const imgPath = path.join(
      __dirname,
      "cache",
      `gf_${senderID}_${targetID}.png`
    );

    fs.writeFileSync(imgPath, res.data);

    return api.sendMessage(
      {
        body: "~এই নে তোর গার্লফ্রেন্ড অন্য মেয়ের দিকে নজর দিস না 😍😸",
        attachment: fs.createReadStream(imgPath)
      },
      threadID,
      () => fs.unlinkSync(imgPath),
      messageID
    );

  } catch {
    return api.sendMessage(
      "API Error Call Boss SAHU",
      threadID,
      messageID
    );
  }
};
