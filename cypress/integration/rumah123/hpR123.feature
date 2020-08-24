Feature: Homepage E2E
  Scenario: i want to search property bandung through homepage
    Given I open "homepage"
    When type "bandung" on input search 
    And select suggestion "Bandung"
    And click button "Cari"
    Then current url should be "/jual/bandung/residensial/"
  