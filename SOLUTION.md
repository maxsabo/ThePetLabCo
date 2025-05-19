# SOLUTION

## Estimation

Estimated: 20 hours

Spent: 15 hours

## Edge Cases Handled
- Empty API results: Show "No products found" message.
- Invalid filter inputs: Graceful error handling.
- Pagination beyond available pages: Disable buttons.

## Solution

Feature: Product filtering
Scenario: Display 12 products on initial load
Given I am on the product collection page
Then I should see a table with 12 products
And I should see pagination controls

Scenario: Filter products by tag "Dog"
Given I am on the product collection page
When I search for "Dog" in the filters sidebar
Then I should see a table with 11 products

Scenario: Handle empty results
Given I am on the product collection page
When I apply a filter with no matching products
Then I should see a message indicating no products found

Scenario: Filter products by multiple criteria
Given I am on the product collection page
When I apply filters for "Cat" tag and "Subscription" set to "Yes"
Then I should see a table with 5 products
