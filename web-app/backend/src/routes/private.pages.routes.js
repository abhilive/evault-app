/*
  @url: /
*/

const { Router } = require('express');
const router = Router();
const { returnPage } = require('../controllers/pagesController');

router.get('/user', returnPage);
router.get('/documents', returnPage);

module.exports = router;
