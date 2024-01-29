import Header from "../Header";
import CheckoutPage from "./CheckoutPage";

class CartPage {
    constructor() {
        this.header = new Header();
    };

    elements = {
        cartProductName: (productNumber) => cy.get('.inventory_item_name').eq(productNumber),
        checkoutBtn: () => cy.get('[data-test="checkout"]'),
    };

    getProductName(productNumber) {
        return this.elements.cartProductName(productNumber - 1)
            .invoke('text');
    };

    clickCheckout() {
        this.elements.checkoutBtn().click();

        return new CheckoutPage();
    };
};

export default CartPage;