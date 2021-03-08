let { Presence } = require('@adiwajshing/baileys')
let handler  = async (m, { conn }) => {
	m.reply(`wa.me//+529984907794
👑Samu330👑`.trim())
	conn.sendFile(m.chat, 'media/esu', "*Bot: Esubot*\n\n_Mantenimiento por:_\n\n👑Samu330👑", m)
}

handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
