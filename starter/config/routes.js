const   router = require('express').Router(),
        view = require('../controllers/view_controller')
        api = require('../controllers/api_controller');


router.get('/', view.index)

router.get('/api/practice', api.index)

module.exports = router;