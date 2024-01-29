import Header from "../Header";
import HomePage from "./HomePage";

class CheckoutCompletePage {
    constructor() {
        this.header = new Header();
    };

    elements = {
        backHomeBtn: () => cy.get('#back-to-products')
    };

    get thanksForPurchaseText() {
        return cy.get('.complete-header').invoke('text');
    };

    clickBackHome() {
        this.elements.backHomeBtn().click();

        return new HomePage
    };
};

export default CheckoutCompletePage;