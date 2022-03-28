const mongoose = require("mongoose");



const eventSchema = new mongoose.Schema({
     event: [ {
      text: {
          type:String
      },
      dateTime:{
          type:Date
      }
            }],
    
    },  { timestamps: true})


module.exports = mongoose.model('event', eventSchema)



