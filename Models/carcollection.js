const mongoose = require("mongoose");

const carcollection = mongoose.Schema({
    carName:{ type: String},
    perDayPrice:{ type: String},
    location:{ type: String},
    seat:{ type: String},
    brand:{ type: String},
    description:{ type: String},
    carimg: { type: String},
});

module.exports  = mongoose.model("carcollection", carcollection);