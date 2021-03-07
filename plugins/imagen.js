let fetch = require('node-fetch')

let handler = async(m, { conn, args, command, usedPrefix, }) => {
  let text = args.join
  fetch('http://api.fdci.se/sosmed/rep.php?gambar=' + encodeURIComponent(text))
  let images = body.split('\n')
  let image = images[Math.floor(Math.random() * images.length)]
   conn.sendFile(m.chat, image, '', 'espero y te guste!! ', m)
  }).catch(() => {
    conn.reply(m.chat, ` !`, m)
  })
}

handler.help = ['imagen']
handler.tags = ['downloader']
handler.command = /^(anime)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
