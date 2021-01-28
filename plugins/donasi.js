let handler = async m => m.reply(`
╭─「 Donar • SAMU330 」
│ • Paypal [https://www.paypal.me/samu330]
│ • Hablame al priv [wa.me/+529984907794]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
