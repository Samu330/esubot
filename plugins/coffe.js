let fetch = require('node-fetch')
const FormData = require('form-data')
//plugin by Samu330
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, text }) => {
let text = args.join` `
if (!text) return conn.reply(m.chat, 'No hay texto para crear logo', m)
let url = 'https://google.com/search?q=' + encodeURIComponent(text)

conn.sendFile(m.chat, url, m)

}
handler.help = ['coffe' ])
handler.tags = ['images']
handler.command = /^(coffe)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
