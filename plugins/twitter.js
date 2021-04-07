let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm... Y ek link?'
  global.API('xteam', '/dl/twitter', {
    url: args[0]
  }, 'APIKEY')
  conn.sendFile(m.chat, undefined, '', '', m)
}
handler.help = [].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^twit$/i

module.exports = handler
