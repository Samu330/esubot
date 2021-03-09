let handler  = async (m, { conn }) => {
  conn.sendFile(m.chat, 'media/belle/belle5.png', m)
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
