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

exports.flights = async (req, res) => {
    res.render('flights', {
        title: 'Flights',
        "config": config
    });
};

exports.weather = async (req, res) => {
    res.render('weather', {
        title: 'Weather',
        "config": config
    })
};

exports.sports = async (req, res) => {
    res.render('sports', {
        title: 'Sports',
        "config": config
    })
};

exports.television = async (req, res) => {
    res.render('television', {
        title: 'Television',
        "config": config
    })
}

exports.companies = async (req, res) => {
    res.render('companies', {
        title: 'Companies',
        "config": config
    })
};

exports.currency = async (req, res) => {
    res.render('currency', {
        title: 'Currency',
        "config": config
    })
};