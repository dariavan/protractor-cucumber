var inheritance = require('./inheritance'),
    SuperHomePage = require('./superHomePage.js');

var EC = protractor.ExpectedConditions;

var SearchResultsPage = function () {
    var _this = this;

    _this._data = {
        elements: {
            levelFilterDropdown: element(by.css('#label-top-filter-instructional_level')),
            languageFilter: element(by.css('#label-top-filter-language')),
            courseNotFoundAlert: element(by.css('[ng-if="count == 0"]')),
            firstCourse: element.all(by.css('a[data-purpose*="search-course-card-title"]')).first()
        },
        fields: {
            searchField: element(by.id('q'))
        }
    },
        _this.filterResultsByLevel = function (level) {
            return _this._data.elements.levelFilterDropdown.click()
                .then(() => {
                    return pickLevelFilter(level).click();
                })
        },
        _this.getInnerText = function (el) {
            return el.getAttribute('value');
        },
        _this.clickOnFirstCourse = function () {
            return _this._data.elements.firstCourse.click();
        };

}

inheritance.inherits(SuperHomePage, SearchResultsPage);

function pickLevelFilter(level) {
    let filterOptions = element.all(by.repeater('option in filter.options'));
    switch (level) {
        case "beginner": return filterOptions.get(1);
        case "intermediate": return filterOptions.get(2);
        case "expert": return filterOptions.get(3);
        default: return filterOptions.get(0);
    }
};
module.exports = SearchResultsPage;