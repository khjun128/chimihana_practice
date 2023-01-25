const express = require('express');
const router = express.Router();

router.route("/communication")
  .get(async(req, res, next) => {
    res.render('communication/index',{});
});
  
module.exports = router;
