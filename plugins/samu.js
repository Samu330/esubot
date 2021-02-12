let handler = async m => m.reply(`
  ____                              
 / ___|    __ _   _ __ ___    _   _ 
 \___ \   / _  | |  _ | _ \  | | | |
  ___) | | (_| | | | | | | | | |_| |
 |____/   \____| |_| |_| |_|  \____|

𝙈𝙮 𝘾𝙝𝙖𝙣𝙚𝙡:

https://www.youtube.com/channel/UCHD4T8Pfcv5PFVzsAbfAPZA
                                        
`.trim()) 
handler.help = ['samu']
handler.tags = ['info']
handler.command = /^samu$/i

module.exports = handler
