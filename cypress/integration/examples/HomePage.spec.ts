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

 })