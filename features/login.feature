Feature: Login

  Scenario Outline: As a user, I can login to system with valid credentials
    Given I open visp webapp
    When I fillout in login as "<username>" and password as "<password>"
    Then I see the "Dashboard"
	
	Examples:
	|username    |password      |
	| dreamteam10|  str0ngP@ss10|
	| dreamteam1|  str0ngP@ss1  |

	
  Scenario: As a user, I CANNOT login to system with invalid credentials
    Given I open visp webapp
    When I fillout in login as "team10" and password as "str0ngP@ss10"
    Then I see the error message "Invalid Username or Password!"