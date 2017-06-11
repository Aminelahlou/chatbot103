const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')

export default async function showLanguage(res) {
  console.log('ANAL')

  const replies = []
  replies.push(formatter.formatImg('../../assets/check.gif'))
  text = 'AI Image Analysis completed : according to the symptoms and data sent, it seems that your baby has a colic.'
  const res = await req.converseText(text, { conversationToken: senderId })
  text = 'Would you like to make an appointment with a doctor near your location?'
  const res = await req.converseText(text, { conversationToken: senderId })

  return replies
}
