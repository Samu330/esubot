let gtts = require('node-gtts')
let fs = require('fs')
let path = require('path')
let { spawn } = require('child_process')
let handler = async (m, { conn, args }) => {
  if (args.length < 2) return m.reply('No hay texto')
  conn.sendFile(m.chat, await tts(args[0], args.slice(1).join(' ')).catch(err => m.reply(err + '')), 'tts.opus', null, m, true)
}
handler.help = ['tts <idioma> <texto>']
handler.tags = ['tools']
handler.command = /^g?tts$/i
module.exports = handler

function tts(lang, text) {
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = path.join(__dirname, '../tmp', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
          resolve(fs.readFileSync(filePath))
          fs.unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}
