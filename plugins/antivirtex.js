let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {
	
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*¡Formato incorrecto! Ejemplo :*\n\n	*${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
	} else if(args[0] == 'on') {
		let cek = global.DATABASE._data.chats[m.chat].novirtex
	if(cek) return conn.reply(m.chat, `*Anti Virtex ha estado activo en este grupo.*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].novirtex = true
		conn.reply(m.chat, `*Anti Virtex activado con éxito.*`, m)
	} else if(args[0] == 'off') {
		let cek = global.DATABASE._data.chats[m.chat].novirtex

	if(!cek) return conn.reply(m.chat, `*Anti Virtex ha sido inhabilitado en este grupo.*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].novirtex = false
		conn.reply(m.chat, `*Anti Virtex desactivado con éxito.*`, m)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*¡Formato incorrecto! Ejemplo :*\n\n	*${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
	} 
}
handler.help = ['antivirtex *on/off*']
handler.tags = ['group admin']
handler.command = /^(antivirtex)$/i
handler.owner = false
handler.admin = true
handler.botAdmin = true
handler.exp = 0
handler.limit = false
module.exports = handler
