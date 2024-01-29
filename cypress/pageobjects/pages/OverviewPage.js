import Header from "../Header";
import CheckoutCompletePage from "./CheckoutCompletePage";

class OverviewPage {
    constructor() {
        this.header = new Header();
    };

    elements = {
        overviewProudctName: (productNumber) => cy.get('.cart_item .inventory_item_name').eq(productNumber),
        productPrice: (productNumber) => cy.get('.item_pricebar >').eq(productNumber),
        finishBtn: () => cy.get('#finish'),
        subtotalSum: () => cy.get('.summary_subtotal_label'),
        taxPrice: () => cy.get('.summary_tax_label'),
        totalSum: () => cy.get('.summary_total_label')

    };

    getProductName(productNumber) {
        return this.elements.overviewProudctName(productNumber)
            .invoke('text');
    };

    getProductNames(productsAmount) {
        let productNamesHome = [];
        let i = 0;

        while (i < productsAmount) {
            this.getProductName(i).then((text) => {
                productNamesHome.push(text);
            });
            i++;
        };
        return productNamesHome;
    };

    getProductPrice(productNumber) {
        return this.elements.productPrice(productNumber - 1)
            .invoke('text');
    };

    getSubTotalSum() {
        return this.elements.subtotalSum()
            .invoke('text');
    };

    getTaxPrice() {
        return this.elements.taxPrice()
            .invoke('text');
    };

    getTotalPrice() {
        return this.elements.totalSum()
            .invoke('text');
    };

    clickFinish() {
        this.elements.finishBtn().click();

        return new CheckoutCompletePage;
    };
};

export default OverviewPage;