global.owner = ['529984907794'] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b'
}

// Sticker WM
global.packname = '🔥𝚂𝚊𝚖 𝚢 𝙿𝚎𝚛𝚛𝚢🥀\n❏ 𝐿𝑎 𝑓𝑒𝑙𝑖𝑐𝑖𝑑𝑎𝑑 𝑛𝑜 𝑒𝑠 𝑒𝑙 𝑜𝑏𝑗𝑒𝑡𝑖𝑣𝑜...\n❏ 𝐄𝐬 𝐞𝐥 𝐜𝐚𝐦𝐢𝐧𝐨\n⚠️Samu330⚠️\n┌ ﹍﹍𝈺﹉﹉﹉𝈻﹍﹍ ┐ \n╭──╼┥𝈸𖾗ᷤ𖾕꯭ͣ𖾔꯭𖾔ͫ𖽙ͧ𝈹┝╾──╮\n╽ ┌──────────┐ ┃\n┃ │ ⚙️𝐒𝐚𝐦𝐮𝟑𝟑𝟎⚙️\n┃ ├──────────┤ ┃\n┃ │✨Sᥲm ყ Pᥱrrყ\n┃ ├──────────┤ ┃\n┃ │    ♥️𝓢 𝔂 𝓟♥️\n╿ └──────────┘ ╿\n╰─┨⃞🔮𝉃𝜄𝜐𝉃𝜍𝜅𝉃𝛾🔮⃞ ┠─╯ '
global.author = '➬🌤️🏆𝙎𝙖𝙢𝙪𝟯𝟯𝟬🏆🌤️\n↳  🔥Sα͉̳̩͉͔͈̰̠̮̝̠m̗͇̤͎̣̲͍̪̙̜̱ͅ ̬̠̺̟̫ч̖͔̗̲͔͎̲̼͇̠̪͈͖ P̠̠͇̩̪͚̩̥̹͓͚̼er̪̮̺̥̖̣͖̮̦̥ṟ̤͖͙̤̣̥͕͔̲̬ч͙̜̞͈̻̪🥀\n\n\n\n\n      🌺ᵇaͤnͨdͬcͤrͣeͭaͥtͮeͤ🌺\n😸𝛴𝑙 𝜀𝜘𝜄𝜏𝜎 𝜀𝜋  𝑙𝛼 𝗩𝗜𝗗𝗔  𝜋𝜎 𝑠𝜀 𝑚𝜄𝜕𝜀 𝜌𝜎𝑟 𝑙𝜎 𝑞𝜇𝜀 𝑙𝜎𝑔𝑟𝛼𝑠,\n𝑆𝜄 𝜋𝜎 𝜌𝜎𝑟 𝑙𝜎𝑠 𝐎𝐁𝐒𝐓𝐀𝐂𝐔𝐋𝐎𝐒 𝑞𝜇𝜀 𝑠𝜇𝜌𝜀𝑟𝛼𝑠. ✨\n\n\n\n\n\n🔮𝑻𝒐𝒅𝒐 𝒔𝒂𝒄𝒓𝒊𝒇𝒊𝒄𝒊𝒐 𝒕𝒓𝒂𝒆 𝒖𝒏𝒂 𝒓𝒆𝒄𝒐𝒎𝒑𝒆𝒏𝒔𝒂🔮\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
