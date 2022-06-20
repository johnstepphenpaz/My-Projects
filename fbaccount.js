const mongoose = require('mongoose');

const myfbaccountSchema = new mongoose.Schema({ 
     email: String,
     password: String,
     date : String
})

module.exports = mongoose.model('fbaccount', myfbaccountSchema);