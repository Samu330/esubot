let handler  = async (m, { conn }) => {
        samu: './belle.jpg' 
	conn.sendFile(m.chat, 'samu', '', 'https://www.mediafire.com/folder/dnvq5v1ntsp36/Dephine+By+Sm330', m)
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
