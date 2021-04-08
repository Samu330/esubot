let handler = async (m, { conn }) => {
  let sesPic = await conn.getSnapshot()
            conn.sendFile(m.chat, sesPic, 'session.png', 'Neh...', m)
  } 
handler.help = ['screan']
handler.tags = ['owner']
handler.command = /^(screan)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = true

module.exports = handler
