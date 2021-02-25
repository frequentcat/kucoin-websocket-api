# kucoin-websocket-api

Fault tolerant auto-reconnecting Websocket API for Kucoin!

**Features**
- Auto-reconnecting Websocket it can handle network outage or server disconnections!
- Websocket can be closed any time with a single fn.call()
- Async/Await ready
- It has similar implementation like the binance-api-node

**DEVELOPMENT STATE:**
- This package give support only for Public endpoint.

**Limitations:**
- Kucoin allow only 100 Symbol / connection and 5 connection total!


**Usage**

```
const Kucoin = require("kucoin-websocket-api")

const client = new Kucoin()

// Maximum 100 Symbol / Connection!
const symbols = ["BTC-USDT", "ETH-BTC"]

// Callback function on socket data
const callback = (e) => {
  console.log(e)
}

let test = async (level = 1) => {
  if (level === 1) {
    // Market Matches
    let connection = await client.MarketMatches(symbols, callback)
  } else if (level === 2) {
    // Market Level 2 Data
    let connection = await client.MarketLevel2(symbols, callback)
  } else if (level === 3) {
    // Market Level 3 Data
    let connection = await client.MarketLevel3(symbols, callback)
  }

  // With calling connection() it close the socket
  setTimeout(() => {
    // Close socket
    console.log("Close socket!")
    connection()
  }, 10000)
}

// Start
test()

```



**Inspirational repos:**
- https://github.com/Ashlar/binance-api-node
- https://github.com/escwdev/kucoin-node-api

