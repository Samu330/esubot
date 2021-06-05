let handler = async (m, { conn, text }) => {
  if (!text) return
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Etiqueta a un miembro'
  txt = text.replace('@' + who.split`@`[0], '').trimStart()
  return conn.sendContact(m.chat, who, txt || conn.getName(who), m)
}
handler.help = ['contacto'].map(v => v + ' @mencion <NombreDelContacto>')
handler.tags = ['tools']

handler.command = /^contacto$/

module.exports = handler
