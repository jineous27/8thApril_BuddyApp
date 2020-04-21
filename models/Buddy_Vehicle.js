const mongoose = require ('mongoose');
const buddyVehicleIdSchema = mongoose.Schema(
    {
        buddy_vehicle_id: {
            type: Number,
            required: true
        },
        delivery_buddy_id: {
            type: Number,
            required: true
        },
        vehicle_registration_number: {
            type: String,
            required: true
        },
        vehicle_type: {
            type: String,
            required: true
        },
        vehicle_model: {
            type: String,
            required: true
        },
        vehicle_color: {
            type: String,
            required: true
        },
        vehicle_insurance: {
            type: Boolean,
            defalut: false
        },
        insurance_documents: {
            type: String, 
            required: true  //attached file url
        }
    },
    {
        timestamps: true
    }
);




module.exports = mongoose.model ("buddy_vehicle_id", buddyVehicleIdSchema);