const express = require('express');
const router = express.Router();

router.route("/product")
  .get(async(req, res, next) => {
    res.render('product/index',{});
});
  
module.exports = router;
