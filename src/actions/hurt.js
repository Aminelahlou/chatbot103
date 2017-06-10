const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')
const body = ['head', 'arm', 'foot', 'leg', 'elbow', 'knee']

export default async function showLanguage(res) {
  console.log('HURT')

  const replies = []
  const quickReplies = []
  body.forEach((l) => {
    quickReplies.push({
      name: l,
      value: `I hurt my ${l}`,
    })
  })
  replies.push(formatter.formatQuickReplies(quickReplies,res.reply()))
  return replies
}
