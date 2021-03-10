let handler = async m => m.reply(`
 *GIT DE ESTE BOT*
https://github.com/Samu330/esubot

MY GIT:

https://github.com/Samu330
😴                                       
`.trim()) 
handler.help = ['git']
handler.tags = ['info']
handler.command = /^git$/i

module.exports = handler

