const candidateModel = require("../models/candidate.model");

const CandidateService = {
    create: async (pRequest) => {
        const { name, email } = pRequest;
        const dataToBeInserted = {
            name: name,
            emailAddress: email
        }
        return await candidateModel.create(dataToBeInserted);
    }
}

module.exports = CandidateService;