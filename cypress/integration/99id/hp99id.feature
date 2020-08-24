Feature: Homepage E2E
  Scenario: i want to search property bandung through homepage
    Given I open "homepage"
    When type "rumah dijual di bandung" on input search 
    And click button "Cari"
    Then current url should be "/jual/rumah?lokasi=bandung"
  