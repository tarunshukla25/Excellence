const CandidateService = require("../sevices/candidate,service");
const CommonValidator = require("./../validators/candidate.validator");

const CandidateController = {
    create: async (req, res) => {
        try {
            const requestData = req.body;
            const validEmail = CommonValidator.validateEmail(requestData.email);
            if (!validEmail) {
                return res.json({ success: false, message: 'Invalid email'});
            }
            const candidateInfo = await CandidateService.create(requestData);
            return res.json({ success: true, data: candidateInfo})
        } catch (error) {
            console.log('error : ', error)
        }
    }
}
module.exports = CandidateController;