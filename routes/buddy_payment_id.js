const express = require ('express');
const router = express.Router();

//CRUD Create Retrieve Update Delete

//API for getting entire Buddy Payment Status ID
router.get ('/', (req, res) => {
    res.json ({
        msg: "Successfully GET Whole buddy payment ID"
    });
});

//API for posting Buddy Payment ID
router.post ('/', (req, res) => {
    res.json ({
        msg: "Successfully POST buddy payment ID"
    });
});

//API for patching Buddy Payment ID
router.patch ('/', (req, res) => {
    res.json ({
        msg: "Successfully PATCH buddy payment ID"
    });
});

//API for deleting Buddy Payment ID
router.delete ('/', (req, res) => {
    res.json ({
        msg: "Successfully DELETE buddy payment ID"
    });
});


module.exports = router;