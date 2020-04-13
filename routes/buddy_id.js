const express = require('express');
const router = express.Router();

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

    const newBuddyId = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        accountEmail: req.body.accountEmail,
        accountPassword: req.body.accountPassword,
        buddyDateofbirth: req.body.buddyDateofbirth,
        termsconditions: req.body.termsconditions,
        buddyProfileImage: req.body.buddyProfileImage,
        buddyWorkType: req.body.buddyWorkType,
        buddyABN: req.body.buddyABN,
        registerGST: req.body.registerGST,
        buddyContact: req.body.buddyContact


    };

    res.json({
        msg: "Registered new buddy ID",
        buddyInfo: newBuddyId

    });
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