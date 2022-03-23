class HomePagePOM{

    link: string = "https://rahulshettyacademy.com/angularpractice/"
    navbar: string = ".navbar"

    navigateTo() {
        cy.visit(this.link)
    }

    getNavBar() {
        return cy.get(this.navbar)
    }

}

export default HomePagePOM