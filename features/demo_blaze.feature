Feature: Test For Demo Site

    @demo
    Scenario: Verify categories are as expected
        Given I am on the 'PRODUCT STORE' page
        When I click categories link
        Then I see 'Phones', 'Laptops' and 'Monitors' under categories

    @demo
    Scenario Outline: Verify products exist in each category
        Given I am on the 'PRODUCT STORE' page
        When I choose '<category>'
        Then I should see '<product>' in display

        Examples:
            | category | product |
            | Phones   | Samsung galaxy s6 |
            | Laptops  | Sony vaio i5 |
            | Monitors | Apple monitor 24 |
