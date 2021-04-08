let fetch = require('node-fetch')
let handler = async (m, { conn, args, command }) => {
fetch('https://videfikri.com/api/ccgenerator/')
.then(res => res.json())
    	.then(json => {
	if(json.error == false) {
    conn.reply(m.chat, Json.result.network, m)
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
