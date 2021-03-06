"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomePagePOM {
    constructor() {
        this.link = "/";
        this.navbar = ".navbar";
        this.protoCommerce = {
            class: ".navbar-brand",
            text: "ProtoCommerce"
        };
        this.home = {
            class: "[href='/angularpractice']",
            text: "Home"
        };
        this.jumbotron = ".jumbotron";
        this.shop = {
            class: "[href='/angularpractice/shop']",
            text: "Shop"
        };
        this.name = ".form-group [name='name']";
        this.nameText = {
            class: "label",
            text: "Name"
        };
        this.email = '[name="email"]';
        this.emailText = {
            class: "label",
            text: "Email"
        };
        this.password = '[placeholder="Password"]';
        this.passwordText = {
            class: "label",
            text: "Password"
        };
        this.checkBox = '.form-check-input#exampleCheck1';
        this.checkBoxText = {
            class: "label",
            text: "Check me out if you Love IceCreams!"
        };
        this.genderText = {
            class: "label",
            text: "Gender"
        };
        this.bottomText = 'Copyright © ProtoCommerce 2018';
        this.gender = '#exampleFormControlSelect1';
        this.employmentStatus = '[for="exampleFormControlRadio1"]';
        this.studentCheckBox = '#inlineRadio1';
        this.studentText = '[for="inlineRadio1"]';
        this.employedCheckBox = '#inlineRadio2';
        this.employedText = '[for="inlineRadio2"]';
        this.entrepreneurCheckBox = '#inlineRadio3';
        this.entrepreneurText = '[for="inlineRadio3"]';
        this.dateOfBirthText = '[for="dateofBirth"]';
        this.dateOfBirth = '[name="bday"]';
        this.submitButton = '[type="submit"]';
        this.twoWayBinding = 'h4 input[name="name"]';
        this.bottom = '.m-0.text-center.text-white';
        this.successMessage = '.alert.alert-success.alert-dismissible';
        this.successMessageCross = '[data-dismiss="alert"]';
    }
    navigateTo() {
        cy.visit(this.link);
    }
    getNavBar() {
        return cy.get(this.navbar);
    }
    getProtoCommerce() {
        return cy.get(this.protoCommerce.class).contains(this.protoCommerce.text);
    }
    getHome() {
        return cy.get(this.home.class).contains(this.home.text);
    }
    getShop() {
        return cy.get(this.shop.class).contains(this.shop.text);
    }
    getJumbotron() {
        return cy.get(this.jumbotron);
    }
    getName() {
        return cy.get(this.name);
    }
    getNameText() {
        return cy.contains(this.nameText.class, this.nameText.text);
    }
    getEmail() {
        return cy.get(this.email);
    }
    getEmailText() {
        return cy.contains(this.emailText.class, this.emailText.text);
    }
    getPassword() {
        return cy.get(this.password);
    }
    getPasswordText() {
        return cy.contains(this.passwordText.class, this.passwordText.text);
    }
    getCheckBox() {
        return cy.get(this.checkBox);
    }
    getCheckBoxText() {
        return cy.contains(this.checkBoxText.class, this.checkBoxText.text);
    }
    getGenderText() {
        return cy.contains(this.genderText.class, this.genderText.text);
    }
    getGender() {
        return cy.get(this.gender);
    }
    getEmploymentStatus() {
        return cy.get(this.employmentStatus);
    }
    getStudentCheckBox() {
        return cy.get(this.studentCheckBox);
    }
    getStudentText() {
        return cy.get(this.studentText);
    }
    getEmployedCheckBox() {
        return cy.get(this.employedCheckBox);
    }
    getEmployedText() {
        return cy.get(this.employedText);
    }
    getEntrepreneurCheckBox() {
        return cy.get(this.entrepreneurCheckBox);
    }
    getEntrepreneurText() {
        return cy.get(this.entrepreneurText);
    }
    getDateOfBirthText() {
        return cy.get(this.dateOfBirthText);
    }
    getDateOfBirth() {
        return cy.get(this.dateOfBirth);
    }
    getSubmitButton() {
        return cy.get(this.submitButton);
    }
    getTwoWayBinding() {
        return cy.get(this.twoWayBinding);
    }
    getBanner() {
        return cy.get(this.bottom);
    }
    getBottom() {
        return cy.contains(this.bottomText);
    }
    getSuccessMessage() {
        return cy.get(this.successMessage);
    }
    getSuccessMessageCross() {
        return cy.get(this.successMessageCross);
    }
}
exports.default = HomePagePOM;
