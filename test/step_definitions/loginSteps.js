var { defineSupportCode } = require('cucumber');

var EC = protractor.ExpectedConditions;

defineSupportCode(function ({ Given, When, Then }) {

    When(/^I log in with "([^"]*)"$/, function (login) {
        return this.pageFactory.currentPage._commonData.elements.loginButton.click()
            .then(() => {
                return browser.wait(EC.presenceOf(this.pageFactory.getPage('login')._data.fields.passwordField), 8000)
            }).then(() => {
                return this.pageFactory.currentPage.logInSite(login);
            }).then(() => {
                // expect to be logged in
                return expect(this.pageFactory.currentPage._data.elements.failLogingAlert.isPresent()).to.eventually.be.false;
            })
    });

    Then('I log out', function () {
        return browser.wait(EC.presenceOf(this.pageFactory.currentPage._data.elements.avatar), 8000)
            .then(() => {
                return this.pageFactory.currentPage.logOut();
            })
    });
});


