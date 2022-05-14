"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HomePagePOM_1 = __importDefault(require("./PageObject/HomePagePOM"));
const Helper_1 = __importDefault(require("./Helper/Helper"));
const Constants_1 = __importDefault(require("./Constants/Constants"));
describe('Home Page Test', () => {
    let homePagePom;
    let helper;
    beforeEach(() => {
        homePagePom = new HomePagePOM_1.default();
        helper = new Helper_1.default();
        homePagePom.navigateTo();
    });
    it('URL should contain angularpractice', () => {
        cy.url().should('contain', 'angularpractice');
    });
    it('Navbar should be displayed', () => {
        homePagePom.getNavBar().should("be.visible");
    });
    it('ProtoCommerce in navbar should be dispalyed', () => {
        homePagePom.getProtoCommerce().should("be.visible");
    });
    it('Home in navbar should be dispalyed', () => {
        homePagePom.getShop().should("be.visible");
    });
    it('Jumbotron should be dispalyed', () => {
        homePagePom.getJumbotron().should("be.visible");
    });
    it('Name should be displayed', () => {
        homePagePom.getName().should("be.visible");
    });
    it('Name text should be displayed', () => {
        homePagePom.getNameText().should("be.visible");
    });
    it('Email should be displayed', () => {
        homePagePom.getEmail().should("be.visible");
    });
    it('Email text should be displayed', () => {
        homePagePom.getEmailText().should("be.visible");
    });
    it('Password should be displayed', () => {
        homePagePom.getPassword().should("be.visible");
    });
    it('Password text should be displayed', () => {
        homePagePom.getPasswordText().should("be.visible");
    });
    it('Checkbox is displayed', () => {
        homePagePom.getCheckBox().should("be.visible");
    });
    it('Checkbox text is displayed', () => {
        homePagePom.getCheckBoxText().should("be.visible");
    });
    it('Gender text is displayed', () => {
        homePagePom.getGenderText().should("be.visible");
    });
    it('Gender is displayed', () => {
        homePagePom.getGender().should("be.visible");
    });
    it('Employment status is displayed', () => {
        homePagePom.getEmploymentStatus().should("be.visible");
    });
    it('Student checkbox is displayed', () => {
        homePagePom.getStudentCheckBox().should("be.visible");
    });
    it('Student text is displayed', () => {
        homePagePom.getStudentText().should("be.visible");
    });
    it('Employed checkbox is displayed', () => {
        homePagePom.getEmployedCheckBox().should("be.visible");
    });
    it('Employed text is displayed', () => {
        homePagePom.getEmployedText().should("be.visible");
    });
    it('Entrepreneur checkbox is displayed', () => {
        homePagePom.getEntrepreneurCheckBox().should("be.visible");
    });
    it('Entrepreneur text is displayed', () => {
        homePagePom.getEntrepreneurText().should("be.visible");
    });
    it('Date of birth text should be displayed', () => {
        homePagePom.getDateOfBirthText().should("be.visible");
    });
    it('Date of birth should be displayed', () => {
        homePagePom.getDateOfBirth().should("be.visible");
    });
    it('Submit button should be displayed', () => {
        homePagePom.getSubmitButton().should("be.visible");
    });
    it('Two way binding input should be displayed', () => {
        homePagePom.getTwoWayBinding().should("be.visible");
    });
    it('Banner should be displayed', () => {
        homePagePom.getBanner().should("be.visible");
    });
    it('Input name should be displayed when data added', () => {
        helper.inputText(Constants_1.default[0].homePageName.data, Constants_1.default[0].homePageName.name);
        homePagePom.getName().should("have.value", Constants_1.default[0].homePageName.name);
    });
    it('Input email should be displayed when data added', () => {
        helper.inputText(Constants_1.default[0].homePageEmail.data, Constants_1.default[0].homePageEmail.name);
        homePagePom.getEmail().should("have.value", Constants_1.default[0].homePageEmail.name);
    });
    it('Input password should be displayed when data added', () => {
        helper.inputText(Constants_1.default[0].homePagePassword.data, Constants_1.default[0].homePagePassword.name);
        homePagePom.getPassword().should("have.value", Constants_1.default[0].homePagePassword.name);
    });
    it('Checkbox for password should be displayed when data added', () => {
        homePagePom.getCheckBox().check();
        homePagePom.getCheckBox().should("be.checked");
    });
    it('Gender selects male should be male', () => {
        helper.dropDown(Constants_1.default[0].gender.data, Constants_1.default[0].gender.male);
        homePagePom.getGender().should("have.value", Constants_1.default[0].gender.male);
    });
    it('Gender selects female should be female', () => {
        helper.dropDown(Constants_1.default[0].gender.data, Constants_1.default[0].gender.female);
        homePagePom.getGender().should("have.value", Constants_1.default[0].gender.female);
    });
    it('Checkbox student should not be checked if not selected', () => {
        homePagePom.getStudentCheckBox().should('not.be.checked');
    });
    it('Checkbox student should be checked if selected', () => {
        homePagePom.getStudentCheckBox().check().should('be.checked');
    });
    it('Checkbox Employed should not be checked if not selected', () => {
        homePagePom.getEmployedCheckBox().should('not.be.checked');
    });
    it('Checkbox Employed should be checked if selected', () => {
        homePagePom.getEmployedCheckBox().check().should('be.checked');
    });
    it('Checkbox Employed should be not checked by default', () => {
        homePagePom.getEntrepreneurCheckBox().should('be.disabled');
    });
    it('Date of birth text should be displayed', () => {
        homePagePom.getDateOfBirthText().should('be.visible');
    });
    it('Date of birth should be empty by default', () => {
        homePagePom.getDateOfBirth().should('be.empty');
    });
    it('Date of birth should be populated based on the input passed', () => {
        homePagePom.getDateOfBirth().click();
        homePagePom.getDateOfBirth().type('2022-12-05');
        homePagePom.getDateOfBirth().should('have.value', '2022-12-05');
    });
    it('Submit button should be enabled', () => {
        homePagePom.getSubmitButton().should('be.enabled');
    });
    it('Two way binding input should be empty default', () => {
        homePagePom.getTwoWayBinding().should('have.value', '');
    });
    it('Two way binding should display data when given', () => {
        homePagePom.getTwoWayBinding().click();
        homePagePom.getTwoWayBinding().type('testing');
        homePagePom.getTwoWayBinding().should('have.value', 'testing');
    });
    it('Bottom text should be displayed', () => {
        homePagePom.getBottom().should('be.visible');
    });
    it('Bottom text should be populated correctly', () => {
        homePagePom.getBottom().should('have.text', 'Copyright © ProtoCommerce 2018');
    });
    it('Success message should appear when the submit button is clicked', () => {
        homePagePom.getSubmitButton().click();
        homePagePom.getSuccessMessage().should('be.visible');
    });
    it('Success message should appear correctly when the submit button is clicked', () => {
        homePagePom.getSubmitButton().click();
        homePagePom.getSuccessMessage().should('contain', 'Success! The Form has been submitted successfully!.');
    });
});
