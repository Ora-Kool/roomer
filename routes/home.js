const express = require('express');
const router = express.Router();
const {join} = require("node:path")

router.get('/', (req, res) => {
    const data = {
        title: "Home"
    }
    res.render('home/home', data)
});
module.exports = router;