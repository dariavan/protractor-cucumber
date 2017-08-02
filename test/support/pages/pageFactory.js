'use strict';
var SuperHomePage = require('./superHomePage.js'),
    SearchResultsPage = require('./searchResultsPage.js'),
    LoginPage = require('./loginPage.js');

var PageFactory = function () {

    var _this = this;

    _this.currentPage = undefined;

    _this.getPage = function (page) {
        var pages = {
            'super-home': SuperHomePage,
            'results': SearchResultsPage,
            'login': LoginPage
        };
        if (!pages[page]) {
            throw new Error('Wrong page name: ' + pages[page]);
        }
        _this.currentPage = new pages[page]();
        return _this.currentPage;
    };
};

module.exports = PageFactory;