# Feature: Is it Friday yet?
#   Everybody wants to know when it's Friday

#   Scenario Outline: Today is or is not Friday
#     Given today is "<day>"
#     When I ask whether it's Friday yet
#     Then I should be told "<answer>"

#   Examples:
#     | day            | answer |
#     | Friday         | TGIF   |
#     | Sunday         | Nope   |
#     | anything else! | Nope   |

#   Scenario: Sunday isn't Friday
#     Given today is Sunday
#     When I ask whether it's Friday yet
#     Then I should be told "Nope"

#   Scenario: Friday is Friday
#     Given today is Friday
#     When I ask whether it's Friday yet
#     Then I should be told "TGIF"

# Feature: Teapot

# Scenario: Check Tea Pot
#   Given I make a GET request to "http://httpbin.org/status/418"
#   When I receive a response
#   Then response should have a status 418