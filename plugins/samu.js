let handler = async m => m.reply(`
  ^    ^    ^    ^    ^  
 /S\  /m\  /3\  /3\  /0\ 
<___><___><___><___><___>

COMO CREAR ESTE BOT:

https://youtu.be/chMc57gjmkI

𝙈𝙮 𝘾𝙝𝙖𝙣𝙚𝙡:

https://www.youtube.com/channel/UCHD4T8Pfcv5PFVzsAbfAPZA
                                        
`.trim()) 
handler.help = ['samu']
handler.tags = ['info']
handler.command = /^samu$/i

module.exports = handler
