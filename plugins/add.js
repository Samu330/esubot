let handler = async (m, { conn, text }) => {
  let users = text.split`,`.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v.length > 20)
  conn.groupAdd(m.chat, users)
}
handler.help = ['add', '+'].map(v => 'o' + v + ' @user')
handler.tags = ['admin']
handler.command = /^(add|o\+)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler

