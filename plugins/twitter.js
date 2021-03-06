let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...y el link?'
  global.API('xteam', '/dl/', {
    url: args[0]
  }, 'APIKEY')
  conn.sendFile(m.chat, '', '', m)
}
handler.help = [].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^twit$/i

module.exports = handler
