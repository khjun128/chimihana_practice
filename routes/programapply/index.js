const axios = require('axios');
const express = require('express');
const router = express.Router();
const instance = axios.create({
  baseURL: 'https://slack.com/api/conversations.list'
});

router.route("/programapply")
  .get(async(req, res, next) => {
    res.render('programapply/index',{});
});
axios({
  method: 'post',
  url: 'https://slack.com/api/conversations.list',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});

module.exports = router;