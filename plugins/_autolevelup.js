let handler = m => m

let levelling = require('../lib/levelling')
handler.before = m => {
  let user = global.DATABASE.data.users[m.sender]
	if (!user.autolevelup) return
	let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) m.reply(`
Felicitaciones, has subido de nivel!
*${before}* -> *${user.level}*
Usa *.profile* Para verificar
	`.trim())
}

module.exports = handler
