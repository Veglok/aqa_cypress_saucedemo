import HomePage from "./HomePage";

class LoginPage {

    elements = {
        usernameField: () => cy.get('#user-name'),
        passwordField: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        errorMessage: () => cy.get('[data-test="error"]')
    };

    typeInUsername(username) {
        this.elements.usernameField()
            .clear()
            .type(username);
    };

    typeInPassword(password) {
        this.elements.passwordField()
            .clear()
            .type(password);
    };

    clickLogin() {
        this.elements.loginBtn()
            .click();
    };

    validLogin() {
        cy.fixture("credentials").then((credentials) => {
            this.typeInUsername(credentials.standardUser);
            this.typeInPassword(credentials.password);
            this.clickLogin();

        });

        return new HomePage();
    };

    invalidLogin() {
        this.typeInUsername(Math.random().toString(36).slice(2, 9));
        this.typeInPassword(Math.random().toString(36).slice(2, 9));
        this.clickLogin();
    };

    get errorMessageText() {
        return cy.get('[data-test="error"]');
    };

    get loginBtn() {
        return this.elements.loginBtn();
    };
};

export default LoginPage;