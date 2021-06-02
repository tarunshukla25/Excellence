const mongoose = require('mongoose');
const schema = mongoose.Schema;

const candidateSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    emailAddress: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('candidate', candidateSchema);