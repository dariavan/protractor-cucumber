var SuperPage = function () { };

SuperPage.prototype._commonData = {
    elements: {
        loginButton: element(by.cssContainingText('a.dropdown__main-link', 'Login')),
        titleText: "Udemy Online Courses - Learn Anything, On Your Schedule",
        mainLogo: element(by.css('#udemy'))
    },
    fields: {
        searchField: element(by.css('#q'))
    }
};

SuperPage.prototype.go = function () {
    return browser.get("https://www.udemy.com/");
};

SuperPage.prototype.searchForCourse = function (query, useAutocomplete) {
    return this._commonData.fields.searchField.sendKeys(query)
        .then(() => {
            if (useAutocomplete == "true") {                
                let autocompletes = by.repeater('autocomplete in autocompletes');
                return element.all(autocompletes).first().click();
            } else {
                return this._commonData.fields.searchField.sendKeys(protractor.Key.ENTER);
            }
        }).then(() => {
            return browser.sleep(500);
        });
};
SuperPage.prototype.isMainLogoVisible = function () {
        return this._commonData.elements.mainLogo.isDisplayed();
    };

module.exports = SuperPage;
