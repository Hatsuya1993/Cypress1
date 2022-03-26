interface linkText {
    class: string;
    text: string
}

class HomePagePOM{

    private readonly link: string = "https://rahulshettyacademy.com/angularpractice/"
    private readonly navbar: string = ".navbar"
    private readonly protoCommerce : linkText = {
        class: ".navbar-brand",
        text: "ProtoCommerce"
    }
    private readonly home : linkText = {
        class: "[href='/angularpractice']",
        text: "Home"
    }

    navigateTo() {
        cy.visit(this.link)
    }

    getNavBar() {
        return cy.get(this.navbar)
    }

    getProtoCommerce() {
        return cy.get(this.protoCommerce.class).contains(this.protoCommerce.text)
    }

    getHome() {
        return cy.get(this.home.class).contains(this.home.text)
    }

}

export default HomePagePOM