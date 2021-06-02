const CandidateModel = require("../models/candidate.model");
const TestScoreModel = require("../models/testScore.model");

const TestScoreService = {
    create: async (pRequest) => {
        const { firstRound, secondRound, thirdRound, candidateId } = pRequest;
        const totalNum = firstRound + secondRound + thirdRound;
        return await TestScoreModel.create({
            firstRound: firstRound,
            secondRound: secondRound,
            thirdRound: thirdRound,
            candidateId: candidateId,
            total: totalNum
        });
    },
    getHighestScoringCandidate: async () => {
        let sortQuery = { sort: { total: -1 } }
        const testScoreInfo = await TestScoreModel.findOne({}, null, sortQuery);
        const candidateInfo = await CandidateModel.findOne({ _id: testScoreInfo.candidateId });
        const result = { 
            condidateId: testScoreInfo.candidateId,
            candidateName: candidateInfo.name,
            highestScore: testScoreInfo.total
        }
        return result;
    },
    getAverageScore: async () => {
        const testScoreInfo = await TestScoreModel.find();
        let firstRound = 0;
        let secondRound = 0;
        let thirdRound = 0;
        testScoreInfo.forEach((_item, index, self) => {
            firstRound += self[index].firstRound;
            secondRound += self[index].secondRound;
            thirdRound += self[index].thirdRound;
        })
        const result = {
            firstRound: firstRound / testScoreInfo.length,
            secondRound: secondRound / testScoreInfo.length,
            thirdRound: thirdRound / testScoreInfo.length,
        }
        return result;
    }
}

module.exports = TestScoreService;