let dB = 20
        let freq = 60
        if (this.args[0]) dB = clamp(parseInt(this.args[0]) || 20, 0, 50)
        if (this.args[1]) freq = clamp(parseInt(this.args[1]) || 20, 20, 500)
        console.log(color('[WAPI]', 'green'), 'Downloading and decrypt media...')
        const mediaData = await decryptMedia(quotedMsg)
        const bass = await stream2Buffer(write => {
            ffmpeg(buffer2Stream(mediaData))
                .audioFilter('equalizer=f=' + freq + ':width_type=o:width=2:g=' + dB)
                .format('mp3')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progress', progress => console.log(color('[FFmpeg]'), progress))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .stream(write)
        })
        client.sendFile(from, baseURI(bass, 'audio/mp3'), 'bass_boosted.mp3', '', id)
    }
})

cmd.on('setuserrole', 'setuserrole', async function (client = new Client(), { from, id, isGroupMsg, mentionedJidList }) {
    failed = permission([
        [!isGroupMsg, config.msg.notGroup],
        [mentionedJidList.length < 1, config.msg.noJid]
    ])
    if (failed[0]) return client.reply(from, failed[1], id)

    let successList = []
    let failedList = []
    let users = /@(\d{5,15}) (\d+)/g.exec(this.text)
    for (let [, user, role] of users) {
        if (group.setMemberRole(groupId, user + '@c.us', role)) successList.push(user + '@c.us')
        else failedList.push(user + '@c.us')
    }
    client.sendTextWithMentions(from, `Done:\n${successList.map(config.msg.listUser)}\n\nFailed:\n${failedList.map(config.msg.listUser)}`)
})

handler.help = ['bass <db>?']
handler.tags = ['downloader']
handler.customPrefix = /(\?$)/
handler.command = /^bass$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
