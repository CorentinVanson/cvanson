'use strict'
module.exports = {
  NODE_ENV: '"production"',
  port: 80,
  proxy: {
    "/api/*": {
      target: "http://localhost:3000",
      secure: false       
    }
  }
}
