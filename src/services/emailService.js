const sender = require('../config/emailConfig')

const sendEmail = async (mailFrom , mailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from :  mailFrom, 
            to : mailTo,
            subject : mailSubject,
            text : mailBody
        });
        console.log(response);    
    } catch (error) {
        console.log(error);   
    }
}

module.exports = {
    sendEmail
}