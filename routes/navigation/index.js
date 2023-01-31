const express = require('express');
const router = express.Router();

router.route("/navigation")
  .get(async(req, res, next) => {
    res.render('navigation/index',{});
});

module.exports = router;