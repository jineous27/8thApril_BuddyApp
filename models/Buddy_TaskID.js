const mongoose = require('mongoose');
const buddyTaskIdSchema = mongoose.Schema(

    {
        buddy_task_id: {
            type: Number,
            required: true
        },
        order_id: {
            type: Number,
            required: true
        },
        delivery_buddy_id: {
            type: Number,
            required: true
        },
        delay_at_shop: {
            type: Boolean,
            default: false
        },
        shop_delay_reason: {
            type: String,
            required: true
        },
        buddy_comment: {
            type: String,
            required: true
        },
        users_signature: {
            type: String, 
            required: true
        },
        user_delivery_report: {
            type: Boolean,
            default: false
        },
        user_issue_report: {
            type: String,
        },
        cash_receivale: {
            type: Boolean,
            default: false
        },
        buddy_task_status: {
            type: String,
            required: true
        },
        buddy_service_fee: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);



module.exports = mongoose.model ("buddy_task_id", buddyTaskIdSchema);