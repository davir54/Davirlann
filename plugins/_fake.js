import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'

let handler = async (m, { conn, args }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let fsizedoc = '1'.repeat(10)
//let ucapan = ucapan()
let sap = ['Hai', 'Ohayo', 'Kyaa', 'Halo', 'Nyann']
let name = await conn.getName(who)
let sgh = md
let sgc = nnn
let gata = 'https://i.imgur.com/EXTbyyn.jpg'
let pp = await conn.profilePictureUrl(who).catch(_ => gata)
//pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 

/*let adReply = {
		fileLength: fsizedoc, seconds: fsizedoc,
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
					showAdAttribution: true,
					title: ucapan(),
					body: '👋 ' + sap.getRandom() + ' Kak :> ' + name,
					mediaUrl: sgc,
					description: botdate,
					previewType: 'PHOTO',
					thumbnail: await(await fetch(pp)).buffer(),
					sourceUrl: sgh
				}
			}
		}*/

/*let fakeig = {
		fileLength: fsizedoc, seconds: fsizedoc,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: ig,
						mediaType: 'VIDEO',
						description: 'Follow: ' + ig,
						title: '👋 ' + sap.getRandom() + ' Kak :> ' + wm,
						body: botdate,
						thumbnailUrl: pp,
						sourceUrl: sgc
					}
				}
			}*/

/*let fpoll = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				pollCreationMessage: {
					name: '👋 Hay Kak :> ' + name
				}
			}
		}*/

/*let ftroli = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				orderMessage: {
					itemCount: fsizedoc,
					status: 1,
					surface: 1,
					message: botdate,
					orderTitle: author,
					sellerJid: '0@s.whatsapp.net'
				}
			}
		}si*/ 

let fkontak = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				contactMessage: {
					displayName: wm,
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`,
					jpegThumbnail: fs.readFileSync('./media/menus/Menu1.jpg'),
					thumbnail: fs.readFileSync('./media/menus/Menu1.jpg'),
					sendEphemeral: true
				}
			}
		}

await conn.reply(m.chat, `*Prueba*`, fkontak,  m)
//conn.sendButton(m.chat, `*Prueba*`, wm, pp, [[' Menu', '/menu']], m, ftroli)
}

handler.command = /^(fake)$/i
export default handler

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "👋 *BIENVENIDO(A) | WELCOME* 👋"
  if (time >= 4) {
    res = "🌇 *Buenos Días | Good Morning* ⛅"
  }
  if (time >= 11) {
    res = "🏙️ *Buenas Tardes | Good Afternoon* 🌤️"
  }
  if (time >= 15) {
    res = "🌆 *Buenas tardes | Good Afternoon* 🌥️"
  }
  if (time >= 17) {
    res = "🌃 *Buenas noches | Good Evening* 💫"
  }
  return res
} 
