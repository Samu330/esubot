let { spawn }  = require('child_process');
let handler  = async (m, { conn }) => {
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('Reiniciando Bot...\nEspere aproximadamente 1 minuto')
    process.send('reset')
    process.exit()
  } else throw '_eeeeeiiittsssss..._'
}
handler.help = ['debounce']
handler.tags = ['host']
handler.command = /^debounce$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
