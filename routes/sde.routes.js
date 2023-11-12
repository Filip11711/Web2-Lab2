const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('sde', {
        title: 'Sde'
    });
});

module.exports = router;