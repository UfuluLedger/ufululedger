const express = require('express');
const ContentController = require('../controllers/contentController');

const router = express.Router();
const contentController = new ContentController();

router.post('/register', contentController.registerContent.bind(contentController));
router.post('/transfer', contentController.transferOwnership.bind(contentController));
router.get('/content/:hash', contentController.getContent.bind(contentController));
router.get('/user/:address', contentController.getUserContents.bind(contentController));

module.exports = router;