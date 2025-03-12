//Added Description 
describe('Product Search', () => {
    it('should display relevant results when searching for "tank tops"', () => {


//Step 1: Visit the Gymshart homepage 

cy.visit('https://nl.gymshark.com/collections/t-shirts-tops/mens?activities=conditioning');
cy.get('#cookie-banner-accept-btn').click();

// Step 2: Ensure the search bar is visible (Adjust selector as needed)
cy.get('[aria-label="search" data-locator-id="search-searchTrigger-select]').click();

// Step 3: Enter "tank tops" into the search bar and submit (simulare pressing enter)
cy.get('[data-locatior-id]="search-search-enter').type('tank tops{enter}'); 

cy.get('.search-results')
    .should('contain.txt', 'Tank Tops');


});
});