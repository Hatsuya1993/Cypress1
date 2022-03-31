"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HomePagePOM_1 = __importDefault(require("./PageObject/HomePagePOM"));
describe('Home Page Test', () => {
    let homePagePom;
    beforeEach(() => {
        homePagePom = new HomePagePOM_1.default();
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
});
