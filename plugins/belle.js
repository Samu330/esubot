let fetch = require('node-fetch')

let handler = async(m, { conn, args, command, usedPrefix }) => {
  fetch('media/belle').then(res => res.png()).then(body => {
    let randobelle = body.split('\n')
    let random = random[Math.floor(Math.random() * randobelle.length)]
    conn.sendFile(m.chat, random, '', 'error xd pto!! ', m)
  }).catch(() => {
    conn.reply(m.chat, ` !`, m)
  })
}

handler.help = ['belle']
handler.tags = ['images']
handler.command = /^(belle)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
