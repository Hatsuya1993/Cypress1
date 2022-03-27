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

    private readonly shop : linkText = {
        class: "[href='/angularpractice/shop']",
        text: "Shop"
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

    getShop() {
        return cy.get(this.shop.class).contains(this.shop.text)
    }

}

export default HomePagePOM