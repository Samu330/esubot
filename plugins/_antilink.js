let handler = m => m

let linkRegex = https//
handler.before = function (m, { user }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    m.reply('Eliminando!!')
conn.groupRemove(m.chat, [m.sender])
    if (global.opts['restrict']) {
       if (!user.isAdmin) return true
       conn.groupRemove(m.chat, [m.sender])
    }
  }
  return true
}

module.exports = handler
