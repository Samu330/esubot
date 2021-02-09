let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch('http://simsumi.herokuapp.com/api?text=' + encodeURIComponent(text))
  let json = await res.json()
  if (json.status) m.reply(json.jawaban)
}
handler.help = ['sim', ''].map(v => v + 'simi <texto>')
handler.tags = ['fun']
handler.command = /^((sim)?simi)$/i

module.exports = handler

