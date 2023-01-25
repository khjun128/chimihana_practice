const express = require('express');
const router = express.Router();

router.route("/company")
  .get(async(req, res, next) => {
    res.render('company/index',{});
});
  
module.exports = router;
