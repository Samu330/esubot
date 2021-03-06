let fetch = require('node-fetch')

let handler = async(m, { conn, command }) => {

    const subreddits = ['dankmemes', 'wholesomeanimemes', 'wholesomememes', 'AdviceAnimals', 'MemeEconomy', 'memes', 'terriblefacebookmemes', 'teenagers', 'historymemes', 'okbuddyretard', 'nukedmemes']
    const randSub = subreddits[Math.random() * subreddits.length | 0]
    console.log('looking for memes on ' + randSub)
    fetch('https://meme-api.herokuapp.com/gimme/' + randSub)
        .then(res => res.json())
        .then(body => {

            conn.sendFile(m.chat, body.url, '', '', m)
        })
        .catch(() => {
          conn.reply(m.chat, `*[ ERROR ]*\n\nOjo⚠ ${command} no se puede utilizar`, m)
        })
}
handler.help = ['meme']
handler.tags = ['fun']
handler.command = /^(meme)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

module.exports = handler
