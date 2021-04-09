let fetch = require('node-fetch')
//plugin by Samu330

let handler  = async (m, { conn, text }) => {

if (!text) return conn.reply(m.chat, '*Porfavor, ingrese lo que desea buscar*', m)
let url = 'https://api.fdci.se/sosmed/rep.php?gambar=' + encodeURIComponent(text)

conn.sendFile(m.chat, url, m)

}
handler.help = ['imagen']
handler.tags = ['images']
handler.command = /^imagen?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
