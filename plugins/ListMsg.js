let handler = m => {
    let msgs = global.DATABASE._data.msgs
    m.reply(`
*LIST MSG*
${Object.keys(msgs).map(v => '- ' + v).join('\n')}
`.trim())
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'list' + v)
handler.tags = ['tools']
handler.command = /^list(vn|msg|video|audio|img|sticker)$/

module.exports = handler 
