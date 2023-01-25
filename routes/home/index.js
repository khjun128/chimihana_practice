const express = require('express');
const router = express.Router();

router.route("/home")
  .get(async(req, res, next) => {
    res.render('home/index',{});
});
  
module.exports = router;
