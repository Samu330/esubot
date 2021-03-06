let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
	conn.updatePresence(m.chat, Presence.composing) 
	let pp = './src/avatar_contact.png'
  try {
	pp = await conn.getProfilePicture(m.chat)
		} catch (e) {
	} finally {
	
		let welcome = global.DATABASE.data.chats[m.chat].welcome
		let left = global.DATABASE.data.chats[m.chat].left
		let filter = global.DATABASE.data.chats[m.chat].nobadword
		let nolink = global.DATABASE.data.chats[m.chat].nolink
		let novirtex = global.DATABASE.data.chats[m.chat].novirtex
    
	var name = conn.getName(m.chat)
	
	conn.sendFile(m.chat, pp, 'profile.jpg', `*[ ${ucword(name)} ]*\n\n  - Anti-Link : ${data(nolink)}\n  - Anti-Virtex : ${data(novirtex)}\n  - Anti-Badword : ${data(filter)}\n  - Welcome Msg : ${data(welcome)}\n  - Leave Msg : ${data(left)}`, m)
	}
}
handler.help = ['groupinfo']
handler.tags = ['group admin','group tools']
handler.command = /^(groupinfo)$/i
handler.exp = 0
handler.group = true
handler.limit = false
module.exports = handler

function ucword(str) {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase();
    });
}

function data(str){
	if (ucword(str) == "False"){
		return "No activo"
	}else {
		return "Activo"
	}
}
