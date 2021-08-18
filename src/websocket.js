"use strict"

const util = require("./websocket_util")
const openWebSocket = require("./open-websocket")


const openMarketCandles = async (BASE, symbol, type, cb) => {
  const w = await openWebSocket(`${BASE}`)

  w.onmessage = (msg) => {
    let msg_data = JSON.parse(msg.data)

    if (msg_data.type == "error") {
      //console.log("Error!", msg)
    }
    // Connect or Reconnect fire the subscribe!
    if (msg_data.type == "welcome") {
      //Add heartbeat
      setInterval(() => {
        w.send(util.ping())
      }, 20000);
      // Subscribe
      let subCandle = "" + symbol + "_" + type;
      //w.send(util.subscribe("/market/candles:", symbols))
      let symbols = [];
      symbols.push(subCandle);
      w.send(util.subscribe("/market/candles:", symbols))
    }

    if (msg_data.type == "message") {
      cb(msg_data.data)
      // console.log("On message data", msg_data)
    }
  }

  return () => {
    w.close(1000, "Close handle was called", { keepClosed: true })
  }
}

const openMarketMatches = async (BASE, symbols, cb) => {
  const w = await openWebSocket(`${BASE}`)

  w.onmessage = (msg) => {
    let msg_data = JSON.parse(msg.data)

    if (msg_data.type == "error") {
      //console.log("Error!", msg)
    }
    // Connect or Reconnect fire the subscribe!
    if (msg_data.type == "welcome") {
      //Add heartbeat
      setInterval(() => {
        w.send(util.ping())
      }, 20000)

      // Subscribe
      w.send(util.subscribe("/market/match:", symbols))
    }

    if (msg_data.type == "message") {
      cb(msg_data.data)
      // console.log("On message data", msg_data)
    }
  }

  return () => {
    w.close(1000, "Close handle was called", { keepClosed: true })
  }
}

const openMarketLevel2 = async (BASE, symbols, cb) => {
  const w = await openWebSocket(`${BASE}`)

  w.onmessage = (msg) => {
    let msg_data = JSON.parse(msg.data)

    if (msg_data.type == "error") {
      //console.log("Error!", msg)
    }
    // Connect or Reconnect fire the subscribe!
    if (msg_data.type == "welcome") {
      //Add heartbeat
      setInterval(() => {
        w.send(util.ping())
      }, 20000)

      // Subscribe
      w.send(util.subscribe("/market/level2:", symbols))
    }

    if (msg_data.type == "message") {
      cb(msg_data.data)
      // console.log("On message data", msg_data)
    }
  }

  return () => {
    w.close(1000, "Close handle was called", { keepClosed: true })
  }
}

const openMarketLevel3 = async (BASE, symbols, cb) => {
  const w = await openWebSocket(`${BASE}`)

  w.onmessage = (msg) => {
    let msg_data = JSON.parse(msg.data)

    if (msg_data.type == "error") {
      //console.log("Error!", msg)
    }
    // Connect or Reconnect fire the subscribe!
    if (msg_data.type == "welcome") {
      //Add heartbeat
      setInterval(() => {
        w.send(util.ping())
      }, 20000)

      // Subscribe
      w.send(util.subscribe("/market/level3:", symbols))
    }

    if (msg_data.type == "message") {
      cb(msg_data.data)
      // console.log("On message data", msg_data)
    }
  }

  return () => {
    w.close(1000, "Close handle was called", { keepClosed: true })
  }
}

module.exports = { openMarketCandles, openMarketMatches, openMarketLevel2, openMarketLevel3 }
