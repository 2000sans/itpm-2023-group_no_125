const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchemea = new Schema({
    user_id: {
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
    school: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },


});
const User = mongoose.model("User", userSchemea);
module.exports = User;

