const testScoreModel = require("../models/testScore.model");
const TestScoreService = require("../sevices/testScore,service");

const TestScoreController = {
    create: async (req, res) => {
        try {
            const requestData = req.body;
            const testScoreInfo = await TestScoreService.create(requestData);
            return res.json({ success: true, data: testScoreInfo})
        } catch (error) {
            console.log('error : ', error)
        }
    },
    getHighestScore: async (req, res) => {
        try {
            const result = await TestScoreService.getHighestScoringCandidate();
            return res.json({ success: true, data: result})
        } catch (error) {
            console.log('error : ', error)
        }
    },
    getAverageScore: async (req, res) => {
        try {
            const result = await TestScoreService.getAverageScore();
            return res.json({ success: true, data: result})
        } catch (error) {
            console.log('error : ', error)
        }
    }
}
module.exports = TestScoreController;