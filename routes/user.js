const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('hello from node dude');
});

module.exports = router;