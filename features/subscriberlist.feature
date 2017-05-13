@SubList
Feature: Subscriber list

  Background: 
			Given I open UBO webapp
			And I login with username "dreamteam9" and password "str0ngP@ss9"

  Scenario Outline: As a user, I can navigate to subscriber list
			When I navigate to subscriber list
			Then I see subscriber list 
			Then I see "<Button>" button
			
			Examples:
			
			|Button    |
			|Paid Up   |
			|Due       |
			|Past Due  |
			|Suspended |
			|Hibernated|
			|Inactive  |
			|Deleted   |


  Scenario Outline: As a user, I can filter records based on buttons available on subscriber list
			When I navigate to subscriber list
			When I click on "<ListButton>" button
			Then I see records of "<ListButton>" status only
			
			Examples:
			
			|ListButton|
			|Inactive  |
			|Deleted   |
			|Paid Up   |
			|Due       |
			|Suspended |
			|Hibernated|
			|Past Due  |

@dev			
  Scenario Outline: As a user, I can see Add filter option
			When I navigate to subscriber list
			Then I see "<FormButton>" push button
			
			Examples:
			
			|FormButton    |
			|Add Filter    |
#			|Add Subscriber|
			