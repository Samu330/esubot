let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pregunta:* ${m.text}
*Responder:* ${pickRandom(['Si','Tal vez sí','Tal vez','Probablemente no','No','Imposible'])}
`.trim(), m)
}
handler.help = ['qué <texto>?']
handler.tags = ['conchas']
handler.customPrefix = /(\?$)/
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

