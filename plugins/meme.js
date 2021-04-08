const axios = require('axios')
let handler = async(m, { conn, text }) => {
let samu = await axios.get('https://meme-api.herokuapp.com/gimme/memesmexico')
            await conn.sendFile(m.chat, `${samu.data.url}`, '', `${samu.data.title}`, m)
  }
handler.help = ['meme']
handler.tags = ['images']
handler.command = /^(meme)$/i
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
