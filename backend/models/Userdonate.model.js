const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const UserdonateSchema = new Schema({

    State: { type: String, required: true },
    Item1: { type: String, required: true },
    Item2: { type: String, required: true,},
    Item3: { type: String, required: true },
    Item4: { type: String, required: true },
    Qty1: { type: String, required: true },
    Qty2: { type: String, required: true },
    Qty3: { type: String, required: true },
    Qty4: { type: String, required: true,},
    Note: { type: String },
    Sendbeforedate: { type: String, required: true },
    Status: { type: String, required: true },
    SpecialNote: { type: String },

   

}, {
    timestamps: true,
});

const Userdonate = mongoose.model('Userdonate', UserdonateSchema);

module.exports = Userdonate;