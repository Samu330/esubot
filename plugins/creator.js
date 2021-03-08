let { Presence } = require('@adiwajshing/baileys')
let handler  = async (m, { conn }) => {
	conn.sendFile(m.chat, 'media/esu', '*Bot: Esubot*\n\n_Mantenimiento por:_\n\n👑Samu330👑', m)
	m.reply(`wa.me//+529984907794
👑Samu330👑`.trim())
}

handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
