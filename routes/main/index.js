const express = require('express');
const router = express.Router();
const query = require('../query');
const moment = require('moment');

router.route("/")
  .get(async(req, res, next) => {
    var sql = "SELECT * FROM mainbanner ORDER BY `id` ASC;";
    var today = moment().format('YYYY-MM-DD HH:mm:ss');
    var datas = await query.executeSQL(sql, [ today, today ]);
    var banners = datas;
    res.render('main/index', { banners });
});
  
module.exports = router;
