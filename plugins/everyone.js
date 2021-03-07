let handler = async (m, { conn }) => {
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = (await conn.fetchGroupMetadataFromWA(m.chat)).participants.map(u => u.jid)
  conn.reply(m.chat, `*[ TODOS ]*\n\n*${conn.getName(m.chat)},'  ○ @' + v.replace(/@.+/, '')).join('\n')}`, m})
  
handler.help = ['']
handler.tags = ['']
handler.command = /^(todos)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
module.exports = handler
