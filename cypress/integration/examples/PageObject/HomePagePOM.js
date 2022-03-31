"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomePagePOM {
    constructor() {
        this.link = "https://rahulshettyacademy.com/angularpractice/";
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
        this.name = "[name='name']";
        this.nameText = {
            class: "label",
            text: "Name"
        };
        this.email = '[name="email"]';
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
}
exports.default = HomePagePOM;
