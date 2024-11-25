const router = require('express').Router();
const { showList, showDetails, init } = require('../controllers/blogController');

router.use('/', init);
router.get('/', showList);
router.get('/:id', showDetails);

module.exports = router;