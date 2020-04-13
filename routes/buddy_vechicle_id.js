const express = require ('express');
const router = express.Router();

//CRUD Create - Retrieve - Update - Delete //

//Develop an API for retriving an entire Buddy ID's
router.get ('/', (req, res) => {
    res.json ({
        msg: "Retrieved wholde buddy vehicle's ID"
    });
});

//Develop an API for register the certain Buddy Vehicle's ID
router.post ('/', (req, res) => {
    
    const newBuddyVehicleId = {
        buddyVehicleId: req.body.buddyVehicleId,
        buddyId: req.body.buddyId,
        vehicleType: req.body.vehicleType,
        vehicleModel: req.body.vehicleModel,
        vehicleColor: req.body.vehicleColor,
        vehicleInsurance: req.body.vehicleInsurance
    };

    res.json ({
        msg: "Registered new buddy vehicle's ID",
        buddyVehicleId: newBuddyVehicleId
    });
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

