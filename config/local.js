const Config = {
    mongo: {
        url: 'mongodb://localhost/excellence',
        options: {
            useNewUrlParser: true,
            autoIndex: false, 
            useUnifiedTopology: true
        }
    },
    port: 5000
}

module.exports = Config;