import fetch from 'node-fetch'
let handler = async (m, { text }) => {
  if (!text) throw 'url/link nya mana?'
  let res = await fetch(`http://hadi-api.herokuapp.com/api/shorturl?url=${text}`)
  let json = await res.json()
  if (json.status) m.reply(json.result)
  else throw 'Link Invalid!\nPeriksa url anda'
}
handler.help = ['shorturl'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^shorturl$/i

export default handler
