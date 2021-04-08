let fetch = require('node-fetch')
let handler = async (m, { conn, args, command }) => {
//fetch('https://videfikri.com/api/ccgenerator/')
let res = await fetch('https://videfikri.com/api/ccgenerator/',)
	if (res.status !== 200) {
    res.text()
    throw res.status
  }
let json = await res.json()
  if (!json.result) throw json
  let { network, number, cvv, pin, balancebalance, expiration_month, expiration_year, name, address, country } = json.result
  let caption = `
Net: ${network}
numero: ${number}
`.trim()
  conn.reply(m.chat, caption, m)
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
