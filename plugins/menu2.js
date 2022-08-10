import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 ʀɪᴍᴜʀᴜ ʙᴏᴛᴢ 』*', `ʜᴀɪ. sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ, ʙᴏᴛ ɪɴɪ ʙɪsᴀ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴅᴏᴡʟᴏᴀᴅ ᴛɪᴋᴛᴏᴋ,ғʙ,ɪɢ,ʏᴏᴜᴛᴜʙᴇ, ᴅᴀɴ ʟᴀɪɴɴʏᴀ. sɪʟᴀʜᴋᴀɴ ᴄʟɪᴄᴋ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ,\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './src/yuki.jpg', 'bit.ly/Papah-Chan', 'ʏᴏᴜᴛᴜʙᴇ ᴏᴡɴᴇʀ', null, null, [
[`🗡️ᴀʟʟ ᴍᴇɴᴜ`, '.? all'],
[`🐦ʟɪsᴛ ᴍᴇɴᴜ`, '.menulist']
[`✨ᴅᴀsʜʙᴏʀᴅ`, '.dashboard']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i

export default handler
