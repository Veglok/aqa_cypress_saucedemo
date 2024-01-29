import Header from "../Header";
import OverviewPage from "./OverviewPage";
import { userData } from "../../fixtures/users";

class CheckoutPage {
    constructor() {
        this.header = new Header();
    };

    elements = {
        firstNameField: () => cy.get('#first-name'),
        lastNameField: () => cy.get('#last-name'),
        postalCodeField: () => cy.get('#postal-code'),
        continueBtn: () => cy.get('#continue')
    };

    typeInFirstName(firstName) {
        this.elements.firstNameField()
            .clear()
            .type(firstName);
    };

    typeInLastName(lastName) {
        this.elements.lastNameField()
            .clear()
            .type(lastName);
    };

    typeInPostalCode(postalCode) {
        this.elements.postalCodeField()
            .clear()
            .type(postalCode);
    };

    clickContinue() {
        this.elements.continueBtn()
            .click();

        return new OverviewPage;
    };

    fillInUserInfo(firstName = userData["firstName"], lastName = userData["lastName"], postalCode = userData["postalCode"]) {
        this.typeInFirstName(firstName);
        this.typeInLastName(lastName);
        this.typeInPostalCode(postalCode);

        return this;
    };

    get missingRequiredInputError() {
        return cy.get('[data-test = error]').invoke('text');
    };
};

export default CheckoutPage;