let handler = async (m, { conn, args }) => {
  
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)
  let users = linkRegex.exec(m.text)
  if (chat.antiLink && isGroupLink) m.reply('Eliminando!') 
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupRemove(m.chat, [user])
  return true
 } 
}

module.exports = handler
