const axios = require('axios')

let handler = async(m, { conn, usedPrefix }) => {
    new Promise((resolve, reject) => {
        axios.get(`https://mnazria.herokuapp.com/api/check?ip=`)
            .then((res) => {
                const teks = `*[ CC FAKE ]*\n\n➸ *Tarjeta* : ${res.data.network}\n➸ *Numero de tarjeta* : ${res.data.number}`

                conn.reply(m.chat, teks, m)

            })
            .catch(reject)
    })

}

handler.help = ['cc']
handler.tags = ['tools']
handler.command = /^(cc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true
handler.exp = 500
module.exports = handler
