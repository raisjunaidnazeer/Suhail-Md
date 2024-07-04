const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_32_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODksXG4gICAgICAgIDUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0LFxuICAgICAgICA3MixcbiAgICAgICAgMTE5LFxuICAgICAgICA0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTksXG4gICAgICAgIDg0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDk5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDk1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0LFxuICAgICAgICA0NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMyxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDgwLFxuICAgICAgICA5MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDY3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDU5LFxuICAgICAgICA3OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4LFxuICAgICAgICA3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNDJac3Q1Qk03TnF0VDBlTEdJbCtwRU5mWUNWcG9DeUZOc0hwMjdaUzVLcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzNDY1ODA3NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjIyM0FGNzBGNkU1NzA3MzJGMDg1OEQxMkQxMTk1Qjc0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDEyMTUzOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBNjduUkdSZVREaWZIeUdUanNGLXFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjExYTQ1YjgwLTJhZmMtNDY1Ni1hOTJkLWJlMGZlMGEzODczMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMSxcbiAgICAgIDcsXG4gICAgICAxNDUsXG4gICAgICAxNDksXG4gICAgICA0NyxcbiAgICAgIDE5OCxcbiAgICAgIDIxNSxcbiAgICAgIDIxLFxuICAgICAgMTAsXG4gICAgICAxNDcsXG4gICAgICAxODEsXG4gICAgICAyMDEsXG4gICAgICAyMCxcbiAgICAgIDI0MCxcbiAgICAgIDE5MixcbiAgICAgIDIyNyxcbiAgICAgIDI0NSxcbiAgICAgIDE0MCxcbiAgICAgIDc4LFxuICAgICAgNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzMsXG4gICAgICAxNDcsXG4gICAgICAzMCxcbiAgICAgIDcsXG4gICAgICAxNTUsXG4gICAgICAxOTMsXG4gICAgICAzNixcbiAgICAgIDU3LFxuICAgICAgMTQyLFxuICAgICAgMTU1LFxuICAgICAgMjUsXG4gICAgICAxMTAsXG4gICAgICA5NCxcbiAgICAgIDExMSxcbiAgICAgIDE2MyxcbiAgICAgIDE2OSxcbiAgICAgIDgxLFxuICAgICAgMTU4LFxuICAgICAgMTk1LFxuICAgICAgMjEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxLNzkyVEpOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzNDY1ODA3NTc6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLgsqBf4LKgKOOAje++n+++m+++nynvvaNcIixcbiAgICBcImxpZFwiOiBcIjE1Nzk3MzA5MTY1NjQxOjIxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pqcCtQa0JFTGp4bTdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieWtobGJrM1NYMVZPbVpCdWlwOXZFK2ZTOE1zSWJDbHlwc2dFcmIzdk5SST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJORlBieFBvNzMxN3BreWtCRUgyeUdUNVcrTXc3L3k0d25aWTVmbkM4VkZMMnpmdU9UOGs4UVV3WmwzVEhRemt5QWp3ci9GVFUybFJuMTc0cGFLazBEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2SXkzdHhFY0lNRmhPNkhENjRBN05qWGd4aVJuSzlwV1NuOW9BMVBkb0dNR1NXZlUySU5WWEVOeUl6MjFJR3hnUk1jbHJmUGhMZHUzbkU0MFk0TkdCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzNDY1ODA3NTc6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDEyMTUzMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURYVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRFhULmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ3BRZjcyZHhTZWJxcVRDcTJwL2RMVVlqWStqZTBSRERIMnJWRDdXNmRQUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MjQxNzAzOTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDEyMTUzNzQ4OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Jaani_MD",
  ownername:process.env.OWNER_NAME|| "Jaani",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
