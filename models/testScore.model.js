const mongoose = require('mongoose');
const schema = mongoose.Schema;

const testScore = new schema({
    firstRound: {
        type: Number,
        require: true
    },
    secondRound: {
        type: Number,
        require: true
    },
    thirdRound: {
        type: Number,
        require: true
    },
    candidateId: {
        type: schema.Types.ObjectId,
        require: true
    },
    total: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('test_score', testScore);