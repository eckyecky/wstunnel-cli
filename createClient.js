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
  const parts = bind.split(':')
  const port = parts.pop()
  const localAddress = parts[0] || '127.0.0.1'
  client.start(localAddress, port, wsUrl.toString(), null, {})
}
