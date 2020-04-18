const mongoose = require('mongoose');
const buddyIdSchema = mongoose.Schema(
    {
        delivery_buddy_id: {
            type: Number,
            required: true
        },
        buddy_first_name: {
            type: String,
            required: true
        },
        buddy_last_name: {
            type: String,
            required: true
        },
        buddy_account_email: {
            type: String,
            required: true
        },
        buddy_account_password: {
            type: String,
            required: true
        },
        agreed_terms_conditions: {
            type: Boolean,
        },
        buddy_dateOf_birth: {
            type: Date,
            required: true
        },
        buddy_profile_image: {
            type: String,
            required: false
        },
        buddy_work_type: {
            type: String,
            required: true
        },
        buddy_abn: {
            type: Number,
            required: true
        },
        buddy_gst_registraion: {
            type: Boolean,
            default: false
        },
        buddy_contact_number: {
            type: Number,
            required: true
        },
        buddy_emergency_name: {
            type: String,
            required: true
        },
        buddy_emergency_contact: {
            type: Number,
            required: true
        }

        
    },
    {
        timestamps: true
    }
);






module.exports = mongoose.model ("buddy_id", buddyIdSchema);