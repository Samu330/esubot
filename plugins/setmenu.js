let handler  = async (m, { conn, command, text }) => {
  let type = command.replace(/^set(menu|help|\?)/, '').toLowerCase()
  if (type == '') {
    if (text) {
      conn.menu = text
      conn.reply(m.chat, 'Menú configurado correctamente\n' + info, m)
    } else {
      conn.menu = {}
      conn.reply(m.chat, 'Reinicio del menú', m)
    }
  } else {
    conn.menu = typeof conn.menu == 'object' ? conn.menu : {}
    if (text) {
      conn.menu[type] = text
      conn.reply(m.chat, 'Menu ' + type + 'configurado correctamente\n' + info, m)
    } else {
      delete conn.menu[type]
      conn.reply(m.chat, 'Menu ' + type + ' direset', m)
    }
  }
}
handler.help = ['', 'before','header','body','footer','after'].map(v => 'setmenu' + v + ' <teks>')
handler.tags = ['owner']
handler.command = /^set(menu|help|\?)(before|header|body|footer|after)?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let info = `
Universal:
%% (%)
%p (Prefix)
%exp (Exp)
%limit (Limit)
%name (Nombre)
%weton (Weton hoy)
%week (Día)
%date (Fecha)
%time (Jam)
%uptime (Tiempo de actividad del bot)
%totalreg (El número de usuarios que están en database)
%npmname
%npmdesc
%version
%github

Sección de menú de encabezado y pie de página:
%category (Categoria)

Sección del cuerpo del menú:
%cmd (Command)
%islimit (Si el comando es limitado)
`.trim()
