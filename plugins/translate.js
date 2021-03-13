
@@ -0,0 +1,40 @@
const translate = require('translate-google-api')


let handler = async (m, { conn, text, usedPrefix }) => {
    if (!text) throw `Ejemplo : \n\n${usedPrefix}tr es|thankyou\n\n: https://cloud.google.com/translate/docs/languages`

    let [to, trans] = text.split`|`

    if (!to) return conn.reply(m.chat, `Mmm😑\n Ejemplo : \n\n${usedPrefix}tr es|thankyou`, m)
    if (!trans) return conn.reply(m.chat, `🙄\n Ejemplo : \n\n${usedPrefix}tr es|thankyou`, m)

    try {
        const result = await translate(`${trans}`, {
            tld: "cn",
            to: `${to}`,
        })
        m.reply(m.chat, `${text}\n\nTraduccion: ` + result[0])
    } catch (e) {
        m.reply('_Error!_')
    }

}
handler.help = ['translate'].map(v => v + ' <to>|<teks>')
handler.tags = ['tools']
handler.command = /^(tr(anslate)?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler 
