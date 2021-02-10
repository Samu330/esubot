let handler = async (m, { conn, text }) => {
  if (conn.user.jid === global.conn.user.jid) {
    let users = [...new Set(conns.map(v => v.user).filter(v => v).map(v => v.jid))]
    for (let id of users) conn.sendMessage(id, text, m.mtype, m.msg.contextInfo ? {
      contextInfo: m.msg.contextInfo
    } : {})
    conn.reply(m.chat, `_Transmisión enviada con éxito a ${users.length} numero del bot_`, m)
  } else conn.reply(m.chat, 'Esta función es solo para hosts de bots',  m)
}
handler.help = ['broadcastjadibot','bcbot'].map(v => v + ' <teks>')
handler.tags = ['host']
handler.command = /^(broadcast|bc)(jadi)?bot$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

