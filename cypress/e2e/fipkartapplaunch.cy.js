import FlipkartPage from '../pageObjects/flipkartPage';

describe('Flipkart App Launch', () => {
    const flipkartPage = new FlipkartPage();

    it('Verify UI elements are visible', () => {
        // Launch the Flipkart app
        cy.visit('https://www.flipkart.com');

        // Verify the Flipkart logo is visible
        flipkartPage.getLogo().should('be.visible');

        // Verify the search bar is visible
        flipkartPage.getSearchBar().should('be.visible');

        // Verify the search button is visible
        flipkartPage.getSearchButton().should('be.visible');

        // Verify the login button is visible
        flipkartPage.getLoginButton().should('be.visible');

        // Verify the cart button is visible
        flipkartPage.getCartButton().should('be.visible');

        // Verify the reseller button is visible
        flipkartPage.getResellerButton().should('be.visible');
    });
});