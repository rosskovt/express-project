const path = require('path');

function getMessages(req, res) {
    res.render('messages', {
        title: 'Messages to my friends',
        friend: 'Elon Musk',
    });
    //res.sendFile(path.join(__dirname, '..', 'public', 'images', 'photo_1.jpg'));
    //res.send('<ul><li>Heeelooo Rostyk</li></ul>');
}

function postMessage(req, res) {
    console.log('Updating messages!');
}

module.exports = {
    getMessages,
    postMessage,
};