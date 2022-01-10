const bodyParser = require('body-parser')
const wallet = require('./walletRoute')

module.exports = app =>{
    app.use(bodyParser)
    app.use(wallet)

}


