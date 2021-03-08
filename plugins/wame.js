let handler = async m => m.reply(m.chat, 'Aqui esta su link de whatsapp: wa.me/${number}', m) 
handler.help = ['wame']
handler.tags = ['info']
handler.command = /^wame/i

module.exports = handler
