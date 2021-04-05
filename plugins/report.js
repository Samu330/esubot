// By RC047 :V

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Ingrese un reporte', m)
    if (text > 300) return conn.reply(m.chat, 'Lo siento, texto demasiado largo, máximo 300 caracteres!', m)
    const laporan = `*「 REPORT 」*\nNumero : wa.me/${m.sender.split`@`[0]}\nReporte : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) 
    conn.reply(m.chat, '✔️Se han informado los problemas al propietario del bot, no se responderá a los informes falsos.', m)
}
handler.help = ['bug', 'report'].map(v => v + ' <reporte>')
handler.tags = ['info']
handler.command = /^(bug|report)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
