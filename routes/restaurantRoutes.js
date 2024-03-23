const express = require("express");


const router = express.Router();


router.route('/sample').get((req,res)=>{

    res.status(200).json({
        success:true,
        message:"Route is working"
    })

})

module.exports = router;