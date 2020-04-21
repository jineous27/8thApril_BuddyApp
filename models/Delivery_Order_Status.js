const mongoose = require ('mongoose');
const deliveryOrderStatusSchema = mongoose.Schema(
    {

        delivery_status_id: {
            type: Number,
            required: true
        },
        buddy_task_id: {
            type: Number,
            required: true
        },
        delivery_order_status: {
            type: String,
            required: true
        },
        time_to_confirm: {
            type: String,
            required: true
        },
        time_to_pickup: {
            type: String,
            required: true
        },
        time_to_complete: {
            type: String,
            required: true
        },
        time_to_incomplete: {
            type: String,
            required: true
        },
        time_to_cancel: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);







module.exports = mongoose.model ("delivery_order_status", deliveryOrderStatusSchema);