let handler = async (m, { conn, text }) => {
  if (text) {
		global.DATABASE._data.chats[m.chat].sBye = text
    conn.reply(m.chat, `*Mensaje configurado correctamente.*\n\n@user = Nombre User\n@subject = Nombre Grupo`, m)
	} else throw `*Ingrese texto para dejar un mensaje.*`
}
handler.help = ['setleave *text*']
handler.tags = ['group admin']
handler.command = /^setleave$/i
handler.admin = true
handler.botAdmin = true
handler.group = true
module.exports = handler
