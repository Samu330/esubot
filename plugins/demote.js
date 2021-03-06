let handler = async (m, { conn, text }) => {
	if(isNaN(text) && !text.match(/@/g)){
		return conn.reply(m.chat, `*Uso apropiado*\n\n.demote @user\n.demote -> reply chat`, m)
	}else if(isNaN(text)) {
		var number = text.split`@`[1]
	}else if(!isNaN(text)) {
		var number = text
	}
	
	if(!text && !m.quoted) return conn.reply(m.chat, `*Uso apropiado*\n\n.demote @user\n.demote -> reply chat`, m)
	if(number.length > 15 || (number.length < 9 && number.length > 0)) return conn.reply(m.chat, `*Ingrese el número correcto !*`, m)
	
try {
	if(text) {
		var user = number + '@s.whatsapp.net'
	} else if(m.quoted.sender) {
		var user = m.quoted.sender
	} else if(m.mentionedJid) {
		var user = number + '@s.whatsapp.net'
	} 
} catch (e) {
		} finally {
			conn.groupDemoteAdmin(m.chat, [user]).catch(console.log)
			conn.reply(m.chat, `*Target has demoted.*`, m)
	}	
}
