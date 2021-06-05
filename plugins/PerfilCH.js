let handler = async (m, { conn, args }) => {
    let bot = conn.user.jid
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
      let img = await conn.downloadM(q)
      if (!img) throw `Y la imagen?!!`
     conn.updateProfilePicture (bot, img)
    conn.reply(m.chat, 'Listo!!\n\n😊Gracias por la nueva foto pqra el Bot!', m)
	}
    }
handler.help = ['perfilbot']
handler.command = /^(perfilbot)$/i
handler.owner = true

module.exports = handler
