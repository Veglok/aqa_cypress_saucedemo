import LoginPage from "../pageobjects/pages/LoginPage";
import Header from "../pageobjects/Header";
import HomePage from "../pageobjects/pages/HomePage";
import OverviewPage from "../pageobjects/pages/OverviewPage";
import CheckoutPage from "../pageobjects/pages/CheckoutPage";

describe('saucedemo tests,', () => {
    const header = new Header();
    const loginPage = new LoginPage();
    const home = new HomePage();
    const checkout = new CheckoutPage();
    const overview = new OverviewPage();

    it('Verify that a user with valid login credentials can log in successfully.', () => {

        loginPage
            .validLogin();

        cy.url()
            .should('eq', Cypress.config().homePageUrl);

    });

    it(`Verify that a user with invalid login credentials cannot log in and sees
    an appropriate error message.`, () => {

        loginPage
            .invalidLogin();

        loginPage
            .errorMessageText
            .should('have.text', 'Epic sadface: Username and password do not match any user in this service');

    });

    it('Verify that the cart icon updates with the correct item count.', () => {
        const addedProducts = Math.floor(Math.random() * (6 - 2 + 1)) + 2;

        loginPage
            .validLogin()
            .addProductsToCart(addedProducts)
            .header
            .cartBadgeValue
            .should('eq', addedProducts.toString());

    });

    it('Verify that the correct items are displayed for checkout.', () => {
        const productsAmount = Math.floor(Math.random() * (6 - 2 + 1)) + 2;
        let homeProducts = [];
        let overviewProducts = [];

        loginPage
            .validLogin()
            .addProductsToCart(productsAmount);

        homeProducts = home.getProductNames(productsAmount);

        header
            .openCart()
            .clickCheckout()
            .fillInUserInfo()
            .clickContinue();

        overviewProducts = overview.getProductNames(productsAmount);

        cy.wrap(homeProducts).should('deep.equal', overviewProducts);

    });

    it('Verify that "Item total" price displays the correct price.', () => {
        let firstPrice, secondPrice;

        loginPage
            .validLogin()
            .addProductsToCart(2);

        header
            .openCart()
            .clickCheckout()
            .fillInUserInfo()
            .clickContinue();

        overview.getProductPrice(1).then((price1) => {
            firstPrice = parseFloat(price1.replace(/[^\d.]/g, ''));
        });

        overview.getProductPrice(2).then((price2) => {
            secondPrice = parseFloat(price2.replace(/[^\d.]/g, ''));
        });

        overview.getSubTotalSum().then((sum) => {
            sum = parseFloat(sum.replace(/[^\d.]/g, ''));

            expect(firstPrice + secondPrice).to.equal(sum);
        });
    });

    it('Verify that "Total" price displays correct price including taxes.', () => {
        let sum;
        let tax;

        loginPage
            .validLogin()
            .addProductsToCart(2);

        header
            .openCart()
            .clickCheckout()
            .fillInUserInfo()
            .clickContinue();

        overview.getSubTotalSum().then((subSum) => {
            sum = parseFloat(subSum.replace(/[^\d.]/g, ''));
        });

        overview.getTaxPrice().then((taxPrice) => {
            tax = parseFloat(taxPrice.replace(/[^\d.]/g, ''));
        });

        overview.getTotalPrice().then((total) => {
            expect(sum + tax).to.equal(parseFloat(total.replace(/[^\d.]/g, '')));
        });

    });

    it('Verify that the "Checkout: Complete!" page is displayed with a confirmation message.', () => {
        let sum;
        let tax;

        loginPage
            .validLogin()
            .addProductsToCart(1);

        header
            .openCart()
            .clickCheckout()
            .fillInUserInfo()
            .clickContinue()
            .clickFinish()
            .thanksForPurchaseText.should('eq', 'Thank you for your order!');

        cy.url()
            .should('eq', Cypress.config().checkoutCompletePageUrl);
    });

    it('Verify that user can logout.', () => {

        loginPage
            .validLogin()
            .addProductsToCart(1);

        header
            .openCart()
            .clickCheckout()
            .fillInUserInfo()
            .clickContinue()
            .clickFinish()
            .clickBackHome()
            .header
            .openBurgerMenu()
            .logout()
            .loginBtn.should('be.visible');
    });
});