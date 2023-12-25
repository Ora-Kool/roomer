const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const data = {
        title: "Login"
    }

    res.render('login', {...data})
});
module.exports = router;