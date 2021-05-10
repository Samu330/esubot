let handler = (m, { usedPrefix, command }) => {
let name = conn.getName(m.sender)
 m.reply(`
Hola ${name},
El comando *${m.text}* no existe en mi lista,
Para ver mis funciones usa: ${usedPrefix}menu
`.trim())
}
handler.command = new RegExp

module.exports = handler 
