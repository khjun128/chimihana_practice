const express = require('express');
const router = express.Router();

router.route("/map")
  .get(async(req, res, next) => {
    res.render('map/index',{});
});
  
module.exports = router;
