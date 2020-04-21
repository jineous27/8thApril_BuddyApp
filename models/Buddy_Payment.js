const mongoose = require('mongoose');
const buddyPaymentSchema = mongoose.Schema (
    {
        buddy_payment_id: {
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
        payment_comment: {
            type: String,
        }
    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model ("buddy_payments", buddyPaymentSchema);
