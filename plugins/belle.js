let handler  = async (m, { conn }) => {
	conn.sendFile(m.chat, 'media/Just rape me..mp4', m)
}

handler.help = ['belle']
handler.tags = ['images']
handler.command = /^(belle)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
