let { Presence } = require('@adiwajshing/baileys')
let handler  = async (m, { conn }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
let name = '👑Samu330👑'
let number = '529984907794'
	conn.sendVcard(m.chat, name, number, m)
}

handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
