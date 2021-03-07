let gtts = require('node-gtts')
let fs = require('fs')
let path = require('path')
let { spawn } = require('child_process')
let handler  = async (m, { conn }) => {
	conn.sendFile(m.chat, 'media/iametekurazai.mp3', 'opus', null, m, true)
}
handler.help = ['']
handler.tags = []
handler.command = /^(test)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.exp = 100
module.exports = handler
