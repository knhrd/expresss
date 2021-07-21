var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/other', (req, res, next) => {
  if (req.session.message !=undefined) {
    msg = + req.session.msg;
  }
    var name = req.body['name'];
    var mail = req.body['mail'];
    var msg  = req.body['msg'];
    var data = {
        title: 'contact',
        content: ' メールアドレス' + mail +'の' + name +'様から'+ msg + 'とお問い合わせ頂きました。 '
    };
    res.render('other', data);
});

module.exports = router;
