import BasePage from '../page_objects/basepage';

given(`I open {string}`, (page_alias) => {
    BasePage.visitPage(page_alias);
    cy.viewport('macbook-15');
});

when(`type {string} on input search`, (text_search) => {
    BasePage.getElement('homepage-input-searchbox').type(text_search)
});

when(`select suggestion {string}`, (text_suggestion) => {
    BasePage.getElement('homepage-suggestion-searchbox').contains(text_suggestion).click()
})

when(`click button {string}`, (text_button) => {
    BasePage.getElement('homepage-button-searchbox').click()
})

then(`current url should be {string}`, (expect_url) => {
    cy.url().should('include',expect_url)
})
