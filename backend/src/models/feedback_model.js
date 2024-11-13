const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
   {
      feedbacked_by: { type: String, required: true },
      feedback: { type: String, required: true },
      created_at: { type: Date, default: new Date() },
     
   }
   , {
      versionKey: false
   }
)

const Customer =  mongoose.model("feedback", CustomerSchema)

module.exports = Customer