let handler = function (m) {
  this.sendContact(m.chat, '+52 998 490 7794', '👑Samu330👑', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
