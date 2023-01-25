const express = require('express');
const router = express.Router();

router.route("/program")
  .get(async(req, res, next) => {
    res.render('program/index',{});
});
  
module.exports = router;
