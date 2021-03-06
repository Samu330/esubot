let fetch = require('node-fetch')
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
	if (!args || !args[0]) return conn.reply(m.chat, `⺀ Formato incorrecto!\n\n*Ejemplo* : _${usedPrefix + command} xd_`, m)
	let text = args.join` `
	let name = conn.getName(m.sender)
	fetch('https://mnazria.herokuapp.com/api/jooxnich?search=' + encodeURIComponent(text))
    	.then(res => res.json())
    	.then(joox => {
    fetch('http://crop.us.to/api.php?url=' + joox.result.mp3Url)
    	.then(res => res.json())
    	.then(json => {
	if(json.error == false) {
    		conn.reply(m.chat, `_Espera un minuto . . ._`, m)
    		conn.sendFile(m.chat, joox.result.imgSrc, 'thumbnail.jpg', `⺀ JOOX PLAY ⺀\n\n	○ ${joox.result.msinger + ' - ' + joox.result.msong}\n\n*Envío de audio . . .*\n\n▌│█║▌║▌║║▌║▌║█│▌▌│`, m)
    		conn.sendFile(m.chat, joox.result.mp3Url, joox.result.msinger + ' - ' + joox.result.msong + '.mp3', '', m, false, { asDocument: true })
			}
		})
	}) .catch(() => { conn.reply(m.chat, `_Error!_`, m) })
}
handler.help = ['joox'].map(v => v + ' *title*')
handler.tags = ['downloader']
handler.command = /^(joox)$/i
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
