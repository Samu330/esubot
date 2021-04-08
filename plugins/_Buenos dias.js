let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Buenos días.mp3', '', 'xd', m)
}
handler.command = /^(bd)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
