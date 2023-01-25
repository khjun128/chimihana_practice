const express = require('express');
const router = express.Router();

router.route("/business")
  .get(async(req, res, next) => {
    res.render('business/index',{});
});
  
module.exports = router;
