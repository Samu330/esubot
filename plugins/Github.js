let fetch = require('node-fetch')
let handler = async (m, { text }) => {
    if (!text) throw 'Que buscas?'
    let res = await fetch(global.API('https://api.github.com', '/search/repositories', {
        q: text
    }))
    let json = await res.json()
    if (res.status !== 200) throw json
    let str = json.items.map((repo, index) => {
        return `
${1 + index}. *${repo.full_name}*${repo.fork ? ' (fork)' : ''}
_${repo.html_url}_
_Creado en *${formatDate(repo.created_at)}*_
_Ultima actualización *${formatDate(repo.updated_at)}*_
👁VISTAS ${repo.watchers}   🍴FORKS  ${repo.forks}   ⭐STARS  ${repo.stargazers_count}
${repo.open_issues} Issue${repo.description ? `
*Descripción: *\n${repo.description}` : ''}
*Clone:* \`\`\`$ git clone ${repo.clone_url}\`\`\`
`.trim()
    }).join('\n\n')
    m.reply(str)
}
handler.help = ['github'].map(v => v + ' <búsqueda>')
handler.tags = ['tools']

handler.command = /^g(ithub|h)search$/i

module.exports = handler

function formatDate(n, locale = 'id') {
    let d = new Date(n)
    return d.toLocaleDateString(locale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
  }
