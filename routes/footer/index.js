const express = require('express');
const router = express.Router();
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
router.route("/footer")
  .get(async(req, res, next) => {
    res.render('footer/index',{});
});

module.exports = router;