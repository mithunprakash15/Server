const mongoose = require("mongoose");
const roomSchema = mongoose.Schema({
    name : {
        type : String
    },
    imageUrls : [],
    currentbookings :[],
    description:{
        type : String
    },
})
const roomModel = mongoose.model('rooms', roomSchema);
module.exports = roomModel;