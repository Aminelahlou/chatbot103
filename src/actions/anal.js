const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')

export default async function showLanguage(res) {
  console.log('ANAL')

  const replies = []
  replies.push(formatter.formatImg('../../assets/check.gif'))
  replies.push(formatter.formatQuickReplies(quickReplies,res.reply()))

  return replies
}
