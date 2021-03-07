let handler = async m => m.reply(m.chat, ${serial.replace(/@c.us/g)}, m) 
handler.help = ['wame']
handler.tags = ['info']
handler.command = /^wame/i

module.exports = handler
