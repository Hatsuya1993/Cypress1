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
}
exports.default = HomePagePOM;
