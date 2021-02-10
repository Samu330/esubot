let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pregunta:* ${m.text}
*Respuesta:* ${pickRandom(['Sí', 'Quizás sí', 'Quizás', 'Quizás no', 'No', 'De ninguna manera'])}
`.trim(), m)
}
handler.help = ['apakah <teks>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^apakah$/i
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

