const WstClient = require('wstunnel').client

const client = new WstClient()
client.verbose()
const url = require('url')

module.exports = (address, bind, auth) => {
  const wsUrl = new url.URL(address)
  if (auth) {
    wsUrl.username = auth.username
    wsUrl.password = auth.password
  }
  client.start(bind, wsUrl.toString(), null, {})
}
