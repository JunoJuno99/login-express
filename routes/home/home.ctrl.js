"use strict"

const hello = (req, res) => {
    res.render("./home");
};

const login = (req, res) => {
    res.render("./home/login");
};

module.exports = {
    hello, // === hello : hello
    login,
}