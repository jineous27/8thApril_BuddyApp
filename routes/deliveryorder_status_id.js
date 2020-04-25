const express = require('express');
const router = express.Router();
const deliveryOrderStatusModel = require("../models/Delivery_Order_Status");

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

    const newDeliveryOrderStatusId = new deliveryOrderStatusModel ({
        delivery_status_id: req.body.delivery_status_id,
        buddy_task_id: req.body.buddy_task_id,
        delivery_order_status: req.body.delivery_order_status,
        time_to_confirm: req.body.time_to_confirm,
        time_to_pickup: req.body.time_to_pickup,
        time_to_complete: req.body.time_to_complete,
        time_to_incomplete: req.body.time_to_incomplete,
        time_to_cancel: req.body.time_to_cancel
    });

    newDeliveryOrderStatusId
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Handling POST requests to buddy ID',
                deliveryOrderStatusInfo: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        });

    // res.json({
    //     msg: "Registered new Delivery order status ID",
    //     orderStatusInfo: newDeliveryOrderStatusId
    // });
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