const WstClient = require('wstunnel').client

const client = new WstClient()
client.verbose()
const url = require('url')

function getBindParts(bindAddress) {
  console.log(bindAddress, typeof bindAddress)
  if (Number.isInteger(bindAddress) || bindAddress.indexOf(':') < 0)
    return ['127.0.0.1', bindAddress]
  const parts = bind.split(':')
  const port = parts.pop()
  const localAddress = parts[0] || '127.0.0.1'
  return [localAddress, port]
}

module.exports = (address, bind, auth) => {
  const wsUrl = new url.URL(address)
  if (auth) {
    wsUrl.username = auth.username
    wsUrl.password = auth.password
  }
  const [localAddress, port] = getBindParts(bind)
  client.start(localAddress, port, wsUrl.toString(), null, {})
}
