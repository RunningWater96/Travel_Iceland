const config = require('../config');

exports.home = async (req, res) => {
    res.render('index', {
        title: 'Travel Iceland',
        "config": config
    });
};

exports.business = async (req, res) => {
    res.render('business', {
        title: 'Business',
        "config": config
    });
};

exports.entertainment = async (req, res) => {
    res.render('entertainment', {
        title: 'Entertainment',
        "config": config
    });
};

exports.interesting = async (req, res) => {
    res.render('interesting', {
        title: 'Interesting Facts',
        "config": config
    });
};

exports.travel = async (req, res) => {
    res.render('travel', {
        title: 'Travel',
        "config": config
    });
};

exports.weather = async (req, res) => {
    res.render('weather', {
        title: 'Weather',
        "config": config
    })
};