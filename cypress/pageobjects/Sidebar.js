import LoginPage from "./pages/LoginPage";

class Sidebar {

    elements = {
        logoutBtn: () => cy.get('#logout_sidebar_link')
    };

    logout() {
        this.elements.logoutBtn().click();

        return new LoginPage
    };

};

export default Sidebar;