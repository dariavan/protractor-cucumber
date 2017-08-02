Feature: log in

@login @all
  Scenario: log in and out
    When I open the base page
    When I log in with "test@mail.ru"
    Then I log out