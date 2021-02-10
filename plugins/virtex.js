let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.virtex)}`, m)
}
handler.help = ['virtex']
handler.tags = ['tools']
handler.command = /^(virtex)$/i
handler.owner = true
handler.mods = true
handler.premium = true
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}


global.virtex = [
'todavía se actualiza, si hay virtex solo envíalo a wa.me/+529984907794'
]


