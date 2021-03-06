
let handler  = async (m, { conn, text}) => {
  if (!text){
    conn.reply(m.chat,'Ingresa el informe de errores de un amigo :)',m)
  }else {
    conn.reply(global.owner + '@s.whatsapp.net',`*Laporan Bug daría gas de g]
    }})
    conn.reply(m.chat,`*Se envió un informe de error satisfactorio*\n\n¿Sabías el hecho impactante de que los informes falsos pueden ocasionar ? *BANNED*`,m)
  }
}
handler.help = ['bug *text*']
handler.tags = ['info']
handler.command = /^(bug)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.exp = 250
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler
