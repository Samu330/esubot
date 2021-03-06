let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {
	
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*[ WRONG FORMAT ]*\n\nExample :\n	○ ${usedPrefix + command} on\n	○ ${usedPrefix + command} off`, m)
	} else if(args[0] == 'on') {
		let cek = global.DATABASE._data.chats[m.chat].nobadword
	  if(cek) return conn.reply(m.chat, `*Badword Filter Has Been Activated*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].nobadword = true
		conn.reply(m.chat, `*[ BADWORD FILTER ACTIVATED ]*\n\nPor favor mantén la forma adecuada de hablar :)`, m)
	} else if(args[0] == 'off') {
		let cek = global.DATABASE._data.chats[m.chat].nobadword
	  if(!cek) return conn.reply(m.chat, `*Badword Filter Has Been Dectivated*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].nobadword = false
		conn.reply(m.chat, `*[ BADWORD FILTER DEACTIVATED ]*`, m)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*[ WRONG FORMAT ]*\n\nExample :\n	○ ${usedPrefix + command} on\n	○ ${usedPrefix + command} off`, m)
	} 
}
handler.help = ['nobadword *on/off*']
handler.tags = ['group admin']
handler.command = /^(nobadword)$/i
handler.owner = false
handler.admin = true
handler.botAdmin = true
handler.exp = 0
handler.limit = false
module.exports = handler
