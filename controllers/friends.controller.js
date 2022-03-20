const model = require('../models/friends.model');

function postFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Friend name is not valid or empty'
        });
    }
    const newFriend = {
        name: req.body.name,
        id: model.length,

    };
    model.push(newFriend);
    res.json(newFriend);
}

function getSingleFriend(req, res) {
    const friendId = Number(req.params.friendId);
    const friend = model[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: 'Friend does not exist'
        });
    }
}

function getFriends(req, res) {
    res.json(model);
}

module.exports = {
    postFriend,
    getSingleFriend,
    getFriends,
};