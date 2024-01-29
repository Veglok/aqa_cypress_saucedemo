import Header from "../Header";

class HomePage {
    constructor() {
        this.header = new Header();
    };

    elements = {
        homeProductName: (productNumber) => cy.get('.inventory_item_name').eq(productNumber),
        heading: () => cy.get('.title'),
    };

    addProductsToCart(productsAmount) {
        cy.addProductsToCart(productsAmount);

        return this;
    };

    getProductName(productNumber) {
        return this.elements.homeProductName(productNumber)
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
};

export default HomePage;