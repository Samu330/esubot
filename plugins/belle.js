let handler  = async (m, { conn }) => {
 
  //conn.sendFile(m.chat,`${Random('media/belle/belle3.png', 'media/belle/belle2.png', 'media/belle/belle3.png', 'media/belle/belle4.png', 'media/belle/belle5.png', 'media/belle/belle6.png', 'media/belle/belle7.png', 'media/belle/belle8.png', 'media/belle/belle9.png',)}`, m)
 let randombelle = body.split('\n') 
 let random ='media/belle'[Math.floor(Math.random() * randombelle.length)]
  conn.sendFile(m.chat, random, '', 'error xd pto!! ', m)
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
