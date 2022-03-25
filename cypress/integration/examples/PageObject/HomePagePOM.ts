interface ProtoCommerce {
    class: string;
    text: string
}

class HomePagePOM{

    link: string = "https://rahulshettyacademy.com/angularpractice/"
    navbar: string = ".navbar"
    protoCommerce : ProtoCommerce = {
        class: ".navbar-brand",
        text: "ProtoCommerce"
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

}

export default HomePagePOM