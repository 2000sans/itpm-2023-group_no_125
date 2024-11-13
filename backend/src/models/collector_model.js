const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
   {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone_number: { type: String, required: true },
      address: { type: String, required: true },
      nic_number: { type: String, required: true },
   }
   , {
      versionKey: false
   }
)

const Customer =  mongoose.model("collector", CustomerSchema)

module.exports = Customer