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
    private readonly jumbotron : string = ".jumbotron"

    private readonly shop : linkText = {
        class: "[href='/angularpractice/shop']",
        text: "Shop"
    }

    private readonly name: string = "[name='name']"

    private readonly nameText: linkText = {
        class: "label",
        text: "Name"
    }

    private readonly email : string = '[name="email"]'

    private readonly emailText: linkText = {
        class: "label",
        text: "Email"
    }

    private readonly password : string = '[placeholder="Password"]'

    private readonly passwordText: linkText = {
        class: "label",
        text: "Password"
    }

    private readonly checkBox : string = '.form-check-input#exampleCheck1'

    private readonly checkBoxText: linkText = {
        class: "label",
        text: "Check me out if you Love IceCreams!"
    }

    private readonly genderText : linkText = {
        class: "label",
        text: "Gender"
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

    getJumbotron() {
        return cy.get(this.jumbotron)
    }

    getName() {
        return cy.get(this.name)
    }

    getNameText() {
        return cy.contains(this.nameText.class, this.nameText.text)
    }

    getEmail() {
        return cy.get(this.email)
    }

    getEmailText() {
        return cy.contains(this.emailText.class, this.emailText.text)
    }

    getPassword() {
        return cy.get(this.password)
    }

    getPasswordText() {
        return cy.contains(this.passwordText.class, this.passwordText.text)
    }

    getCheckBox() {
        return cy.get(this.checkBox)
    }
    
    getCheckBoxText() {
        return cy.contains(this.checkBoxText.class, this.checkBoxText.text)
    }

    getGenderText() {
        return cy.contains(this.genderText.class, this.genderText.text)
    }

}

export default HomePagePOM