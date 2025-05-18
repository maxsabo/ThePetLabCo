Feature: Product Listing and Filtering

  Scenario: Display initial product list
    Given I am on the product collection page
    Then I should see a filters sidebar
    And I should see a table with 12 products
    And I should see pagination controls

  Scenario: Filter products by tag "Dog"
    Given I am on the product collection page
    When I search for "Dog" in the filters sidebar
    Then I should see a table with 11 products

  Scenario: Filter products by price "30"
    Given I am on the product collection page
    When I filter by price "30" in the filters sidebar
    Then I should see a table with 1 product

  Scenario: Filter products by subscription "Yes" and tag "Cat"
    Given I am on the product collection page
    When I filter by subscription "Yes" in the filters sidebar
    And I search for "Cat" in the filters sidebar
    Then I should see a table with 5 products

  Scenario: Handle empty results
    Given I am on the product collection page
    When I apply a filter with no matching products
    Then I should see a message indicating no products found