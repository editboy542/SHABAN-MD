const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0dSOWMwc3JCdzRDNEtic1oyZ0pPa1htak0xUkhYZmRRRmdSZDlZQW5rTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzU0MnRQeFo2YVRSNDlMRml0TzZwREszaTlVUnpNVGlhUjlaU0VCcHFXZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQnlqbnFoY2JoL24wVERydDJ1TmszcS9mMTFxcTVZV0VMMmYzOVY0Nm04PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSTliT3hQMzFmaUZVcU51a1ZLUThYUTdVTEFlbmM5Wk5LK200SEoyN2xRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFIWlVJbHJNUzd3RURIeGI0dzFBekR5Uk11elJLY0phaldqVHpQU2ZtWHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRNWkJnSmFESnJpelIwWXRmNktacHRPQ0MrMThENDVFakYyUUZ4em91Z1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1AzR0o5a3gxM2NscXR4RmVwWXU0dzJjTzNrUCszc2VtZVRwNTZ6N3Qxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSG1xMGVlbWM2dXBSRHJ6NGRHUmNVVmlmcU9tbHVvU0ZlcDBLcDBpZnV5bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhpS1l0WlVnczBsc2F3OFNyUFdmL282TmtldmVjWG1iMmdYR0lGeDF1TUVlek1jbEcvbUFEZk9iSS9PK00xemYyd0dmNDlwSHY4eW02NnBZVUcybUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6Imx3bW5KRHFnakRtc29haUt5Sm9kYmFzSkV4MEltdWcwQkt3SXozalg2czA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE4OTcyNDI4NjM4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDOEZCQjUwRjk5MjU1NTA4MzQ4NDdGRjMwQ0JFODQ4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjEyOTEzMzJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxODk3MjQyODYzOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzBGRDU4NkY0RkZENjUzNTc3OEUyNTg1RkMwRUVCQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxMjkxMzMzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJCUlJCQVNHWSIsIm1lIjp7ImlkIjoiOTE4OTcyNDI4NjM4OjExQHMud2hhdHNhcHAubmV0IiwibGlkIjoiOTc3MTU0NzIwNzY4NjE6MTFAbGlkIiwibmFtZSI6Il/inaXii4big53wn4eq8J2Qg/CdkIjwnZCTIPCfh6fwnZCO8J2QmCDinaVfIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMbWpocHdERU1EWTdNY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ0alJseHB0dGlpMklJK05BSGNpSGIzYTV4ZmVLdWZTbWdycDl5U1lxdkV3PSIsImFjY291bnRTaWduYXR1cmUiOiJaZHpPSXRNR1RsdUJXZFVJbm5qTy9jMGVyWmxqamVOUDlUV3hpQmFUb3lnSENlRlZoWmltS09oSmRLbGVwd1NLTE9YaTJPQUpqS1NMNzFvbmlZTm9CZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ21PTTdjV3c1am5LS3JIZEVxQnB1MXJWRXZzY2pWWVVrMHJCZHpjMnZIM0lyQloyeGltMWgwWE9VRzVEKzNuMjdIZFYydkxzRExRVDBvNWFDYmtoQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTg5NzI0Mjg2Mzg6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYlkwWmNhYmJZb3RpQ1BqUUIzSWgyOTJ1Y1gzaXJuMHBvSzZmY2ttS3J4TSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYxMjkxMzMxLCJsYXN0UHJvcEhhc2giOiIyTUZLUFEiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUd1RiJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW _❥⋆⃝🇪𝐃𝐈𝐓 🇧𝐎𝐘 ❥_ 𓅓*",
// set the auto reply massage on status reply
AUTO_CHATBOT: process.env.AUTO_CHATBOT || "true", 
// "true" = default ON, "false" = default OFF
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/_❥⋆⃝🇪𝐃𝐈𝐓 🇧𝐎𝐘 ❥_/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "_❥⋆⃝🇪𝐃𝐈𝐓 🇧𝐎𝐘 ❥_",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "_❥⋆⃝🇪𝐃𝐈𝐓 🇧𝐎𝐘 ❥_",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "918972428638",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "_❥⋆⃝🇪𝐃𝐈𝐓 🇧𝐎𝐘 ❥_",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ _❥⋆⃝🇪𝐃𝐈𝐓 🇧𝐎𝐘 ❥_*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.private_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "918972428638",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME__❥⋆⃝🇪𝐃𝐈𝐓 🇧𝐎𝐘 ❥_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
