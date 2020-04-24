const express = require ('express');
const router = express.Router();
const buddyVehicleIdModel = require("../models/Buddy_Vehicle");

//CRUD Create - Retrieve - Update - Delete //

//Develop an API for retriving an entire Buddy ID's
router.get ('/', (req, res) => {
    res.json ({
        msg: "Retrieved wholde buddy vehicle's ID"
    });
});

//Develop an API for register the certain Buddy Vehicle's ID
router.post ('/', (req, res) => {
    
    const newBuddyVehicleId = new buddyVehicleIdModel ({
        buddy_vehicle_id: req.body.buddy_vehicle_id,
        delivery_buddy_id: req.body.delivery_buddy_id,
        vehicle_registration_number: req.body.vehicle_registration_number,
        vehicle_type: req.body.vehicle_type,
        vehicle_model: req.body.vehicle_model,
        vehicle_color: req.body.vehicle_color,
        vehicle_insurance: req.body.vehicle_insurance,
        insurance_documents: req.body.insurance_documents
    });
    //항상 기본적인 포맷이다. Save - Then - Catch API 호출..
    newBuddyVehicleId
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Handling POST requests to Buddy Vehicle ID',
                createBuddyIdInfo: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        });




    // res.json ({
    //     msg: "Registered new buddy vehicle's ID",
    //     buddyVehicleId: newBuddyVehicleId
    // });
});

//API for patching 
router.patch ('/', (req, res) => {
    res.json({
        msg: "Update buddy vehicle's ID"
    });
});

//API for deleting
router.delete ('/', (req, res) => {
    res.json({
        msg: "Delete buddy vehicle's ID"
    });
});

module.exports = router;

