Feature: PokeAPI
    Gotta catch em all

Scenario: Get type of a pokemon
    Given I make a GET request to "https://pokeapi.co/api/v2/pokemon/<name>"
    When I receive a response
    Then response should have a status 200
    And response should have a json with type "<type>"

  Examples:
    | name           | type       |
    | charmander     | fire       |
    | pikachu        | electric   |
    | squirtle       | water      |