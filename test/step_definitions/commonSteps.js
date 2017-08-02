var { defineSupportCode } = require('cucumber');

var EC = protractor.ExpectedConditions;

defineSupportCode(function ({ Given, When, Then }) {

    When('I open the base page', function () {
        return this.pageFactory.getPage('super-home').go()
    });

    Then(/^title should be "([^"]*)"$/, function (expTitle) {
        return expect(browser.getTitle()).to.eventually.be.equal(expTitle);
    });

    Then('main logo better be visible', function () {
        return this.pageFactory.currentPage.isMainLogoVisible()
            .then((isVisible) => {
                return expect(isVisible).to.be.true;
            });
    });

    When(/^I enter course name "([^"]*)" and use autocomplete "([^"]*)"$/, function (query, useAutocomplete) {
        return this.pageFactory.getPage('super-home').searchForCourse(query, useAutocomplete);
    });
});