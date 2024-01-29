import CartPage from "./pages/CartPage";
import Sidebar from "./Sidebar";

class Header {

    elements = {
        hamburgerMenu: () => cy.get('#react-burger-menu-btn'),
        shoppingCartIcon: () => cy.get('.shopping_cart_link'),
    };

    get cartBadgeValue() {
        return cy.get('.shopping_cart_badge').invoke('text');
    };

    openCart() {
        this.elements.shoppingCartIcon().click();

        return new CartPage();
    };

    openBurgerMenu() {
        this.elements.hamburgerMenu().click()

        return new Sidebar;
    };

};

export default Header;