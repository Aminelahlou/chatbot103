const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')

export default async function showLanguage(res) {
  console.log('POOP')

  const replies = []
  replies.push(formatter.formatImg("http://2.bp.blogspot.com/-JyYlr_9zvXc/Tg24irCIz2I/AAAAAAAACNY/m-8H2D43q4k/s1600/parenting-fail-elephant-poop.jpg"))
  return replies
}
