const axios = require('axios')
 let handler = async(m, { conn }) => {
let les = await axios.get('https://meme-api.herokuapp.com/gimme/lesbians')
            conn.sendFile(m.chat, `${les.data.url}`, '', `${les.data.title}`, m)
  }
handler.help = ['lesbian']
handler.tags = ['images']
handler.command = /^(lesbian)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
