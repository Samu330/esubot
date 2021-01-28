let handler = async (m, { conn, text }) => {
  if (text) {
    conn.welcome = text
    m.reply('Bienvenida configurada correctamente\n@user (Mention)')
  } else throw 'Donde esta el texto?'
}
handler.help = ['setwelcome <texto>']
handler.tags = ['owner']

handler.command = /^setwelcome$/i
module.exports = handler

