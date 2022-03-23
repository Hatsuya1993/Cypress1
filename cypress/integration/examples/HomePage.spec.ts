import HomePagePOM from './PageObject/HomePagePOM'

describe('Home Page Test', () => { 
    
    let homePagePom: HomePagePOM

    beforeEach(() => {
        homePagePom = new HomePagePOM()
        homePagePom.navigateTo()
    })

    it('Navbar should be displayed', () => {
        homePagePom.getNavBar().should("be.visible")
    })

 })