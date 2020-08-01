const express = require('express');
const router = express.Router();
const Pusher = require('pusher');
const config = require('config');

var pusher = new Pusher({
    appId: config.get('pusher.app_id'),
    key: config.get('pusher.app_key'),
    secret: config.get('pusher.app_secret'),
    cluster: 'ap1',
    encrypted: true
});

router.get('/', (req, res) => {
    res.send('Hello world GET');
});

router.post('/', (req, res) => {
    console.log('sending event to pusher');
    console.log(res.body);
    console.log({
        points: 1,
        god: req.body.god
    });
    pusher.trigger('god-channel', 'god-vote', {
        points: 1,
        god: req.body.god
    });
    res.json({
        success: true,
        message: 'Thank you for choosing god!'
    });

});
module.exports = router;