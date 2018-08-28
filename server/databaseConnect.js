const mongoose = require('mongoose');

module.exports = (config) => {
  mongoose.connect(`mongodb://${config.dev.host}/${config.dev.dbname}`,
    err => {
      if (err) {
        return console.error('■mongo connect error■', err)
      }
      console.log('■mongodb connect success !')
    })
  mongoose.Promise = global.Promise
}
