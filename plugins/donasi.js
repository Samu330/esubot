let handler = async m => m.reply(`
╭─〘 𝑺𝒂𝒎𝒖𝟑𝟑𝟎𝗜 〙
│ • 𝑃𝑎𝑦𝑝𝑎𝑙 [paypal.me/samu330]
│ • Pero con que te suscribas a mi canal basta:)
│ https://www.youtube.com/watch?v=chMc57gjmkI&t=88s
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
