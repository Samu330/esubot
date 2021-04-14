const axios = require('axios')
let handler = m => m
let handler = async(m, { conn }) => {
            let prem = isPrems
handler.before = function (m, { user }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isPrems  = prem.exec(m.text)

  if (isPrems) {
    m.reply('Eliminando!!')
              
              
let les = await axios.get('https://meme-api.herokuapp.com/gimme/lesbians')
            conn.sendFile(m.chat, `${les.data.url}`, '', `${les.data.title}`, m)
  }
handler.help = ['lesbian']
handler.tags = ['images']
handler.command = /^(lesbian)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
