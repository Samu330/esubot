let handler = async m => m.reply(`
╭─「 Smu330 • APOYAME:) 」
│ • My canal de youtube:
│ • [https://www.youtube.com/channel/UCqPXxG2ZdDe_ugOqMHDRMqg]
│ 
│ • My Facebook:
│ • [https://www.facebook.com/tupapi.samu330]
│
│ • My grupo de Whatsapp:
│ • [https://chat.whatsapp.com/ELeHAmX3P6j1xy1qNRjEXR]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['samu']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
