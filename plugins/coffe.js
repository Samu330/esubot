let fetch = require('node-fetch')
const FormData = require('form-data')

const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, text }) => {

  if (text) conn.sendFile(m.chat, ('https://videfikri.com/api/textmaker/coffeecup/?text=' { file: '', text }), m)

  else throw 'Uhm ... El texto?'

}
handler.help = ['coffe' ].map(v => v + ' <texto>')
handler.tags = ['imagen']
handler.command = /^coffe?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
