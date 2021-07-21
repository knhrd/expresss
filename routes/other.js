const express = require('express');
const router = express.Router();


router.post('/post', (req, res, next) => {
    var msg  = req.body['msg'];
    req.session.msg = msg;
    var data = {
        title: 'content',
        content: "Last Message: " + req.session.msg
    };
    res.render('other', data);
});

module.exports = router;