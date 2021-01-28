let handler = async (m, { conn, text }) => {
  if (text) {
    conn.welcome = text
    m.reply('Bye se configuró correctamente\n@user (Mention)')
  } else throw 'Donde esta el texto?'
}
handler.help = ['setbye <texto>']
handler.tags = ['owner']

handler.command = /^setbye$/i
module.exports = handler

