const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	const domain = req.get('host');
    res.render('home', { domain });
});

module.exports = router;
