const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchemea = new Schema({
    security_pin: {
        type: String,
        required: true
    },
     user_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    nic_number: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

});
const Admin = mongoose.model("Admin", adminSchemea);
module.exports = Admin;