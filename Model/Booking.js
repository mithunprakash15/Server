const mongoose = require("mongoose");
const bookingSchema = mongoose.Schema(
    {
        room:{
            type : String, required: true

        },
        roomId:{
            type : String, required: true

        },
        userId : {
            type : String, required: true

        },
        fromdate : {
            type : String, required: true

        },
        todate : {
            type : String, required: true

        },

        totalDays :{
            type : String, required: true

        },
        status :{
            type : String, required: true , default : 'booked'

        }

    })
    const bookingModel = mongoose.model('bookings', bookingSchema);
module.exports = bookingModel;
