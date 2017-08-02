Feature: find a course

@searchTrue @search @all
  Scenario: search for a course
    When I open the base page
    Then title should be "Udemy Online Courses - Learn Anything, On Your Schedule"
    When I enter course name "paint" and use autocomplete "true"
    When I filter results by level "expert"
    Then I pick first course

@searchFalse @search @all
  Scenario: search for a non-existing course
    When I open the base page
    Then main logo better be visible
    When I enter course name "asdasdasdasd" and use autocomplete "false"
    Then I check for not-found-alert