const fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Etiqueta una Foto/Envia una imagen con el comando: ${usedPrefix}wait`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Lo siento, ${mime} no soportado`
  let img = await q.download()
  await m.reply('Searching Anime Titles...')
  let anime = `data:${mime};base64,${img.toString('base64')}`
  let response = await fetch('https://trace.moe/api/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ image: anime }),
  })
  if (!response.ok) throw 'Imagen no encontrada!'
  let result = await response.json()
  let { is_adult, title, title_chinese, title_romaji, episode, season, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
  let link = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`
  let nobuyaki = `
${similarity < 0.89 ? 'No estoy seguro que sea' : ''}
・ 🇯🇵Título japonés: *${title}*
・ ✒️Ortografía: *${title_romaji}*
・ Similitud: *${(similarity * 100).toFixed(1)}%*
・ Episodio : *${episode.toString()}*
・ Ecchi : *${is_adult ? 'Yes' : 'No'}*
`.trim()
  conn.sendFile(m.chat, link, 'srcanime.mp4', `${nobuyaki}`, m)
}
handler.help = ['qanime (caption|reply image)']
handler.tags = ['tools']
handler.command = /^(qanime)$/i

module.exports = handler 
