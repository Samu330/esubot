let handler  = async (m, { conn, args }) => {
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*[ GROUP MODE ]*\n\nEstablece on o off !`, m)
	} else if(args[0] == 'on') {
    global.DATABASE._data.groupMode = true
		conn.reply(m.chat, `*[ GROUP MODE ]*\n\nEl bot se cambió correctamente a Solo grupo.\nBot no se puede usar los comandos en el chat personal del bot`, m)
	} else if(args[0] == 'off') {
    global.DATABASE._data.groupMode = false
		conn.reply(m.chat, `*[ GROUP MODE ]*\n\nSe desactivó correctamente el modo Solo grupo.\nPuede usar bots en el chat personal`, m)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*[ GROUP MODE ]*\n\nEstablece on o off !`, m)
	} 
}
handler.help = ['groupmode *on/off*']
handler.tags = ['owner']
handler.command = /^(groupmode)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.exp = 0
module.exports = handler
