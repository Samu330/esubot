// ariffb - http:/wa.me/6283128734012
const translate = require('translate-google-api')
let handler = async (m, { text, usedPrefix }) => {
    goblok = `ejemplo: \n${usedPrefix}tr codigo de idioma|texts\n${usedPrefix}tr en|thankyou\n\nIdiomas admitidos: https://cloud.google.com/translate/docs/language`
    if (!text) throw goblok

    let [to, trans] = text.split`|`

    if (!to) throw `Por favor ingrese el código de idioma\nejemplo: \n\n${usedPrefix}tr en|thankyou\n\nIdiomas admitidos: https://cloud.google.com/translate/docs/language`
    if (!trans) throw `Por favor ingrese la frase que desea traducir.\nejemplo: \n\n${usedPrefix}tr en|thankyou`

    try {
        const result = await translate(`${trans}`, {
            tld: "cn",
            to: `${to}`,
        })
        m.reply(`Frase: ${trans}\n\nTraduccion: ${result[0]}`)
        console.log(result[0])
    } catch (e) {
        throw goblok
    }

}
handler.help = ['translate'].map(v => v + ' <to>|<texts>')
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

