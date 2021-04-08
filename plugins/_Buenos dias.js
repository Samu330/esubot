let handler  = async (m, { conn }) => {

       conn.sendFile(m.chat, 'media/Buenos dias.mp3', m)
}
handler.command = buenos dias
module.exports = handler
