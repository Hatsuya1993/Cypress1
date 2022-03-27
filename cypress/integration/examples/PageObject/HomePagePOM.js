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
        this.shop = {
            class: "[href='/angularpractice/shop']",
            text: "Shop"
        };
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
}
exports.default = HomePagePOM;
