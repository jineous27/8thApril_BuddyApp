const express = require('express');
const router = express.Router();
const buddyTaskIdModel = require("../models/Buddy_TaskID");

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

    const newBuddyTaskModel = new buddyTaskIdModel ({
        // buddyTaskId: req.body.buddyTaskId,
        order_id: req.body.order_id,
        delivery_buddy_id: req.body.delivery_buddy_id,
        delay_at_shop: req.body.delay_at_shop,
        shop_delay_reason: req.body.shop_delay_reason,
        buddy_comment: req.body.buddy_comment,
        users_signature: req.body.users_signature,
        user_delivery_report: req.body.user_delivery_report,
        user_issue_report: req.body.user_issue_report,
        cash_receivale: req.body.cash_receivale,
        buddy_task_status: req.body.buddy_task_status,
        buddy_service_fee: req.body.buddy_service_fee
    });

    newBuddyTaskModel
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Handling POST requests to buddy ID',
                createBuddyIdInfo: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        });



    // res.json ({
    //     msg: "Post new Buddy Task ID",
    //     buddyTaskInfo: newTaskID

    // });
    
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