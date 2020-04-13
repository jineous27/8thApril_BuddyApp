const express = require('express');
const router = express.Router();

//CRUB 

//API for getting entire Delivery order status ID
router.get ('/', (req, res) => {
    res.json ({
        msg: "Retrived whole delivery order stats ID"
    });
});

//API for getting certain Delivery order status ID


//API for posting Delivery order status ID
router.post ('/', (req, res) => {

    const newDeliveryOrderStatusId ={
        deliveryStatusId: req.body.deliveryStatusId,
        buddyTaskId: req.body.buddyTaskId,
        deliveryOrderStatus: req.body.deliveryOrderStatus,
        timeStamp: req.body.timeStamp

    };

    res.json({
        msg: "Registered new Delivery order status ID",
        orderStatusInfo: newDeliveryOrderStatusId
    });
});

//API for patching 
router.patch ('/', (req, res) => {
    res.json({
        msg: "Patching Delivery order status ID"
    });
});

//API for deleting
router.delete ('/', (req, res) => {
    res.json({
        msg: "deleting Delivery order status ID"
    });
});



module.exports = router;