let { Presence } = require('@adiwajshing/baileys')
let handler  = async (m, { conn }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
let name = '👑Samu330👑'
let number = 'wa.me//+529984907794'
	conn.reply(m.chat, name, number, m)
	conn.sendFile(m.chat, 'media/esu', "*Bot: Esubot*\n\n_Mantenimiento por:_\n\n👑Samu330👑", m)
}

handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
