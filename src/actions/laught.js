const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')

export default async function showLanguage(res) {
  console.log('LAUGHT')

  const replies = []
  replies.push(formatter.formatImg('https://giphy.com/gifs/laughing-cristiano-ronaldo-LBA8IfDSb7TBS'))
  return replies
}
