const config = require('../config');

exports.home = async (req, res) => {
    res.render('home', {
        title: 'Travel Iceland',
        "config": config
    });
};