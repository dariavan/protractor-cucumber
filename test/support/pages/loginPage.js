'use strict';

var SearchResultsPage = require('./searchResultsPage'),
    SuperHomePage = require('../pages/superHomePage.js'),
    inheritance = require('./inheritance');

var LoginPage = function () {
    var _this = this;

    _this._data = {
        elements: {
            submitButton: element(by.css('#submit-id-submit')),
            avatar: element(by.css('.dropdown__avatar')),
            logOutButton: element.all(by.cssContainingText('span.menu__title', 'Выход')).first(),
            failLogingAlert: element(by.className('alert-danger'))
        },
        fields: {
            emailField: element(by.css('#id_email')),
            passwordField: element(by.css('#id_password'))
        }
    },
        _this.logInSite = function (login) {
            return _this._data.fields.emailField.sendKeys(login)
                .then(() => {
                return _this._data.fields.passwordField.sendKeys("9611134")
                }).then(() => {
                    return _this._data.elements.submitButton.click()
                });
        },
        _this.logOut = function () {
            return browser.actions().mouseMove(_this._data.elements.avatar)
                .mouseMove(_this._data.elements.logOutButton).click().perform();
        }
};

inheritance.inherits(SuperHomePage, LoginPage);
module.exports = LoginPage;