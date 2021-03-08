let handler  = async (m, { conn }) => {
  conn.sendFile(m.chat,`“${Random("media/belle/belle1.png",
  "media/belle/belle2.png",
  "media/belle/belle3.png",
  "media/belle/belle4.png",
  "media/belle/belle5.png",
  "media/belle/belle6.png",
  "media/belle/belle7.png",
  "media/belle/belle8.png",
  "media/belle/belle9.png",
  "media/belle/belle10.mp4")}”`, m)
}
handler.help = ['belle']
handler.tags = ['images']
handler.command = /^(belle)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
