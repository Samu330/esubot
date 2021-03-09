let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  let hrs = Math.floor(seconds / (60 * 60))
	let mins = Math.floor(seconds % (60 * 60) / 60)
  let secs = Math.floor(seconds % 60)
  await m.reply('_Testing speed..._')
  let neww = performance.now()
  m.reply (' ' + pad(hrs) + ':' + pad(mins) + ':' + pad(secs))
  m.reply(neww - old + 'ms')
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed)$/i
module.exports = handler
