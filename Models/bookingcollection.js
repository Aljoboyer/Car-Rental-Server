const mongoose = require("mongoose");

const bookingcollection = mongoose.Schema({
    name: { type: String},
    email: { type: String},
    phone: { type: String},
    img: { type: String},
    carName: { type: String},
    perDayPrice: { type: String},
    seat: { type: String},
    carImg: { type: String},
    licenseFront: { type: String},
    licenseBack: { type: String},
    licenseDate: { type: String},
    licenseNum: { type: String},
    NidFront: { type: String},
    NidBack: { type: String},
    NidNum: { type: String},
    payment: { type: String},
    location: { type: String},
    diffDays: { type: String},
    startDate: { type: String},
    endDate: { type: String},
    secretKey: {type: String}
});

module.exports  = mongoose.model("bookingcollection", bookingcollection);