var { defineSupportCode } = require('cucumber');

var EC = protractor.ExpectedConditions;

defineSupportCode(function ({ Given, When, Then }) {

  When(/^I filter results by level "([^"]*)"$/, function (level) {
    return browser.wait(EC.presenceOf(this.pageFactory.getPage('results')._data.elements.levelFilterDropdown, 8000))
      .then(() => {
        return this.pageFactory.currentPage.filterResultsByLevel(level);
      })
  });

  Then('I pick first course', function () {
    return browser.wait(EC.presenceOf(this.pageFactory.currentPage._data.elements.levelFilterDropdown, 8000))
      .then(() => {
        return this.pageFactory.currentPage.clickOnFirstCourse()
      }).then(() => {
         return browser.sleep(1000);
        }).then(() => {
        return this.pageFactory.currentPage.getInnerText(this.pageFactory.currentPage._data.fields.searchField);
      }).then((innerText) => {
        return expect(browser.getTitle()).to.eventually.have.string(innerText);
      });
  });

  Then('I check for not-found-alert', function () {
    return expect(this.pageFactory.getPage('results')._data.elements.courseNotFoundAlert.isPresent()).to.eventually.be.true;
  });
})