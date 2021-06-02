const express = require("express");
const router = express.Router();

const CandidateController = require('../controller/condidate.controller');
const TestScoreController = require('../controller/testScore.controller');
router.get("/",function(req, res){
	res.send("API route incorrect");
});

router.post('/api/candidate', CandidateController.create);
router.post('/api/test/score', TestScoreController.create);
router.get('/api/highest/score', TestScoreController.getHighestScore);
router.get('/api/average/score', TestScoreController.getAverageScore);

module.exports = router;