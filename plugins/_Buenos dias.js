let gtts = require('node-gtts')
let fs = require('fs')
let path = require('path')
let { spawn } = require('child_process')
let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Buenos dias.mp3', 'tts.opus', null, m, true)
}
handler.command = /^(buenosdias)?(bd)$/i
module.exports = handler
