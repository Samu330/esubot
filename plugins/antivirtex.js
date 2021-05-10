let handler = m => m

handler.before = function(m, { text }) {

  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let username = conn.getName(who)
  let mentionedJid = [m.sender]
  let name = m.fromMe ? conn.user : conn.contacts[m.sender]
  let users = m.sender

    if (m.text > 5000) {
  this.reply(m.chat, '*「 ANTI VIRTEX 」*\n\nDetectado *${username}* a enviado un mensaje de mas de 5000 caracteres!\n\nSeras expulsado de este grupo por seguridad!', m)
     this.groupRemove(m.chat, [users])
  }
}
handler.group = true

module.exports = handler
