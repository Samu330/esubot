let handler  = async (m, { conn }) => {
        samu = 'media/Just rape me..mp4' 
	conn.sendFile(m.chat, 'samu', m)
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
