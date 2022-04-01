import HomePagePOM from './PageObject/HomePagePOM'

describe('Home Page Test', () => { 
    
    let homePagePom: HomePagePOM

    beforeEach(() => {
        homePagePom = new HomePagePOM()
        homePagePom.navigateTo()
    })

    it('URL should contain angularpractice', () => {
        cy.url().should('contain', 'angularpractice')
    })

    it('Navbar should be displayed', () => {
        homePagePom.getNavBar().should("be.visible")
    })

    it('ProtoCommerce in navbar should be dispalyed', () => {
        homePagePom.getProtoCommerce().should("be.visible")
    })

    it('Home in navbar should be dispalyed', () => {
        homePagePom.getShop().should("be.visible")
    })

    it('Jumbotron should be dispalyed', () => {
        homePagePom.getJumbotron().should("be.visible")
    })

    it('Name should be displayed', () => {
        homePagePom.getName().should("be.visible")
    })

    it('Name text should be displayed', () => {
        homePagePom.getNameText().should("be.visible")
    })

    it('Email should be displayed', () => {
        homePagePom.getEmail().should("be.visible")
    })

    it('Email text should be displayed', () => {
        homePagePom.getEmailText().should("be.visible")
    })
 })