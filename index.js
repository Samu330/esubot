console.log('Starting...')
let { spawn } = require('child_process')
let path = require('path')
const CFonts  = require('cfonts')
CFonts.say('TERMUX-WABOT-SAMU330', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say('\'wabot-esu\' By @Samu330', {
  font: 'console',
  align: 'center',
  gradient: ['green']
})
CFonts.say('SUSCRIBETE A MI CANAL, SI NO ESTAS SUSCRITO EL BOT NO JALA:v', {
  font: 'console',
  align: 'center',
  gradient: ['red']
})

function start() {
  let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    if (data == 'reset') {
      console.log('RESET')
      p.kill()
      start()
      delete p
    }
  })
}

start()
