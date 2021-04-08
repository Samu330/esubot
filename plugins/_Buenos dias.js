let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Buenos dias.mp3', m)
}
handler.command = /^(buenosdias)?(bd)$/i
module.exports = handler
