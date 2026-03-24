class FlipkartPage {
    getLogo() {
        return cy.get('img[alt="Flipkart"]'); // Selector for Flipkart logo
    }

    getSearchBar() {
        return cy.get('input._3704LK'); // Selector for search bar
    }

    getSearchButton() {
        const button = cy.get('button.L0Z3Pu'); // Selector for search button
        button.should('exist'); // Assert that the button exists
        return button;
    }

    getLoginButton() {
        return cy.get('button._2KpZ6l._2doB4z'); // Selector for login button
    }

    getCartButton() {
        return cy.get('a._3SkBxJ'); // Selector for cart button
    }

    getResellerButton() {
        return cy.get('a[href*="sell-on-flipkart"]'); // Selector for reseller button
    }
}

export default FlipkartPage;
