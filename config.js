const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUhucm81elRVZzZHbzZYcmZhVnEzM29jNDVQUDVCUlZzL1hoUnJHQ1dXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFFSNm9Uc1pqZC9MM3g4cDlTcTRpSHNVVzZsaHlxL3BadWV2VmJOakFsWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTTg1Z1g4bHJlOTg0U0NSdnJlaHFSSDRIWE4waHRPNGd5YWhoNjI0SG0wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiUDRoMXlpTFR3RnZEcG1WcHArODk4eTRtbGJROWh3T1ZHMVNUVkl6RzNVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndMbTVpM1JQUjU0Z1BrNHp3SzcvQ09RM2ttcWxrL0x6OHE3N0gwYkxuRm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlljaVlNWHBESGFHVFhZSmpqdjhMajRtRzlYSldTRDUvazR0a3NnT1lVMVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUV1WE45ZDJuMzJvMEtZQ1pmM0dKd0wxNStCdnFOc055ZktGUm43TVdIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicStKVDU5ZE80SVZjcHNhSVdZazhZcjM1azk3dzh0cmRwNitlNCtCUGlYdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRjTGViYkpVK1BMaFNTaU9lRHhxMStaQ0Q1a3FVdEtjYlVVTnVjbk1hUnY0MXJQZlhVSzM3MmdSOUdJcXM3V1BBVnQybXB3QTRVM01XQng3bGZJOWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjQsImFkdlNlY3JldEtleSI6IkNOdEdXdmgvSnFPeExVVTdacHFEWlN4c2t1anc1aG8wRGIxSmdSci9PdTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE4NTM1OTkzOTYzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDODNDNUY0RDNBMEVCQkRCNDUxMkZDREMzRTgxOUIyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjEyNDc3ODV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxODUzNTk5Mzk2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzFCMkY2RDQzRjYxMTIzOEJFOEY3MDMxQTREODI5RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxMjQ3Nzg1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJTVlhUSkNUUSIsIm1lIjp7ImlkIjoiOTE4NTM1OTkzOTYzOjlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNjYzMjc1MjQzMTk0NTg6OUBsaWQiLCJuYW1lIjoicmFqdWtoYW40ODQ5NiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVgrMlBnSEVLU0U2c2NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibDh2d0hEOGZGeUN2ZDBGODB4eGQvMDVyVjM0RDZabmcyLzdBOGNIY2VCdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoicUl4RzJuZzVtNDNsSWdIT1BhcTdzM3NPK2dFbzNKVWZGOURReGtHZEQwL1hMTHJIRDZ1b2hTOTEyZlRiQitFZTJkb25ZaHRyU3BKcTdlSENvcDFLQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IjFWMk1GQVFUVW1rbjBibHMzMjF1NCtvT25lUzcyOUwwcGpwRHBGTHdGVFE3T1RLNG50bGlXSzJTVXJKemVOQW8wNUhpdmVQV0lnSlcxZmVVSnJVdWpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE4NTM1OTkzOTYzOjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWmZMOEJ3L0h4Y2dyM2RCZk5NY1hmOU9hMWQrQSttWjROdit3UEhCM0hnYyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYxMjQ3Nzg0LCJsYXN0UHJvcEhhc2giOiIzZll3Q0siLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUR4NiJ9",
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
OWNER_NUMBER: process.env.OWNER_NUMBER || "918535993963",
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
DEV: process.env.DEV || "918535993963",
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
