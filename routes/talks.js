const express = require('express');
const router = express.Router();
const talksController = require('../controllers/talskController');

router.get('/', talksController.getAllTalks);

router.post('/', talksController.addTalk);

router.post('/:talkId/vote', talksController.voteTalk);

router.delete('/:talkId', talksController.deleteTalk);

module.exports = router;
