const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const { sendEmail } = require('./services/emailService');

const setupAndStartServer = () => {

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.listen(PORT , () => {
        console.log(`Server started on port ${PORT}`);
        sendEmail(
            'srinivasspprt@gmail.com',
            'remotesri2277@gmail.com',
            'This is just a test email',
            'hey , this is the support team!'
        );

    });
}

setupAndStartServer();