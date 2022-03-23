"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomePagePOM {
    constructor() {
        this.link = "https://rahulshettyacademy.com/angularpractice/";
        this.navbar = ".navbar";
    }
    navigateTo() {
        cy.visit(this.link);
    }
    getNavBar() {
        return cy.get(this.navbar);
    }
}
exports.default = HomePagePOM;
