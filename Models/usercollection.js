const mongoose = require("mongoose");

const usercollection = mongoose.Schema({
    name:{ type: String},
    email:{ type: String},
    phone:{ type: String},
    img: {type: String}
});

module.exports  = mongoose.model("usercollection", usercollection);