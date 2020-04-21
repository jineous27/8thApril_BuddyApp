const express = require('express');
const router = express.Router();
const buddyIdModel = require("../models/Buddy_ID")

//CRUD Create - Retrive - Update - Delete //

//Develop an API for retriving the entire Buddy IDs
router.get ('/', (req, res) => {
    res.json({
        msg: "Retrieved whole buddy's ID"
    });
});


// Develop an API for retriving the certain Buddy ID
//test


// API for posting Buddy IDs
router.post ('/', (req, res) => {

    const newBuddyId = new buddyIdModel({
        // delivery_buddy_id: req. body.delivery_buddy_id,
        buddy_first_name: req.body.buddy_first_name,
        buddy_last_name: req.body.buddy_last_name,
        buddy_account_email: req.body.buddy_account_email,
        buddy_account_password: req.body.buddy_account_password,
        buddy_dateOf_birth: req.body.buddy_dateOf_birth,
        agreed_terms_conditions: req.body.agreed_terms_conditions,
        buddy_profile_image: req.body.buddy_profile_image,
        buddy_work_type: req.body.buddy_work_type,
        buddy_abn: req.body.buddy_abn,
        buddy_gst_registraion: req.body.buddy_gst_registraion,
        buddy_contact_number: req.body.buddy_contact_number,
        buddy_emergency_name: req.body.buddy_emergency_name,
        buddy_emergency_contact: req.body.buddy_emergency_contact

    });

    newBuddyId
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Handling POST requests to buddy Id',
                createBuddyIdInfo: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        });

    // res.json({
    //     msg: "Registered new buddy ID",
    //     buddyInfo: newBuddyId
    // });
});

//API for patching API
router.patch ('/', (req, res) => {
    res.json({
        msg: "Updated buddy ID"
    });
});

//API for deleting API
router.delete ('/', (req, res) => {
    res.json({
        msg: "Deleted buddy ID"
    });
});    






module.exports = router;