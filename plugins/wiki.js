  
const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {

    if (!text) return conn.reply(m.chat, 'Ejemplos de uso: ' + usedPrefix + 'wikipedia bot', m)

    axios.get(`https://docs-jojo.herokuapp.com/api/wiki?q=` + text)
        .then((res) => {
            conn.reply(m.chat, res.data.result, m)
        })
        .catch()
}
handler.help = ['wiki *query*','wikipedia *query*']
handler.tags = ['data']
handler.command = /^(wiki|wikipedia)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
