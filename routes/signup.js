const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const data = {
        title: "SignUp"
    };

    res.render('signup', {...data})
});
module.exports = router;