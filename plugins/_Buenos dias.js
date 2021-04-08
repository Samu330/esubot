let handler  = async (m, { conn }) => {

let samu = buenos dias
       conn.sendFile(m.chat, 'media/Buenos dias.mp3', m)
}

module.exports = handler
