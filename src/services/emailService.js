const sender = require('../config/emailConfig');
const TicketRepository = require('../repositories/ticketRepo');

const ticketRepo = new TicketRepository();

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
    } catch (error) {
        console.log(error);
    }
}

const fetchPendingEmails = async (timestamp) => {
    try {
        const response = await ticketRepo.get({status: "PENDING"});
        return response;
    } catch (error) {
        console.log(error);
    }
}

const updateTicket = async (ticketId, data) => {
    try {
        const response = await ticketRepo.update(ticketId, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}


const createNotification = async (data) => {
    try {
        const response = await ticketRepo.create(data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}