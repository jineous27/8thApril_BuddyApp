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
    res.json({
        msg: "Registered new buddy ID"
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