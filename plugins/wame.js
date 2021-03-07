let handler = async m => m.reply(m.chat, v.replace.(/@c.us/g), m) 
handler.help = ['wame']
handler.tags = ['info']
handler.command = /^wame/i

module.exports = handler
