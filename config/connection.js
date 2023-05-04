const { connect, connection } = require('mongoose');

connect('mongodb://localhost/bubbleDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;