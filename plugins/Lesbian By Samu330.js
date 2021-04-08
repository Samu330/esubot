const axios = require('axios')
let handler = async(m, { conn, text }) => {
let les = await axios.get('https://meme-api.herokuapp.com/gimme/lesbians')
            await conn.sendFile(m.chat, `${les.data.url}`, '', `${les.data.title}`, m)
  }
handler.help = ['porno']
handler.tags = ['images']
handler.command = /^(porno)$/i
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
