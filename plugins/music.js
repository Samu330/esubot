let handler  = async (m, { conn }) => {
	conn.sendFile(m.chat, 'media/Music/The Happy Troll (Griefing Theme Song)_-bcUyBUylzs.mp3',, m)
}
handler.help = ['']
handler.tags = []
handler.command = /^(music)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.exp = 100
module.exports = 
