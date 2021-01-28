let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Pregunta:* ${command} ${text}
*Responder:* ${pickRandom(['Si','Talves si','Tal vez','Tal vez no','No','Imposible'])}
`.trim(), m)
}
handler.help = ['qué <pregunta>']
handler.tags = ['conchas']
handler.command = /^apakah/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

