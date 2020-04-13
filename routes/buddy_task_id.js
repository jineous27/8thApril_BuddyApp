const express = require('express');
const router = express.Router();

//CRUD Create - Retrive - Update - Delete 

//API for getting whole task
router.get ('/', (req, res) => {
    res.json ({
        msg: "Retrive whole buddy task id"
    });
});

//API for retriving the certain Buddy Task ID

//API for posting Buddy Task ID
router.post ('/', (req, res) => {

    const newTaskID = {
        buddyTaskId: req.body.buddyTaskId,
        orderId: req.body.orderId,
        deliveryBuddyId: req.body.deliveryBuddyId,
        pickupDelay: req.body.pickupDelay,
        delayReason: req.body.delayReason,
        buddyComment: req.body.buddyComment,
        userSignature: req.body.userSignature,
        reportDeliveryuser: req.body.reportDeliveryuser
    }

    res.json ({
        msg: "Post new Buddy Task ID",
        buddyTaskInfo: newTaskID

    });
    
});

//API for patching API
router.patch ('/', (req, res) => {
    res.json({
        msg: "Patching Buddy Task ID"
    });
});


//API for deleting API
router.delete ('/', (req, res) => {
    res.json ({
        msg: "Delete Buddy Task ID"
    });
});


module.exports = router;