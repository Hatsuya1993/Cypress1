interface linkText {
    class: string;
    text: string
}

class HomePagePOM{

    private readonly link: string = "/"
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

    private readonly gender : string = '#exampleFormControlSelect1'

    private readonly employmentStatus : string = '[for="exampleFormControlRadio1"]'

    private readonly studentCheckBox : string = '#inlineRadio1'

    private readonly studentText : string = '[for="inlineRadio1"]'

    private readonly employedCheckBox : string = '#inlineRadio2'

    private readonly employedText : string = '[for="inlineRadio2"]'

    private readonly entrepreneurCheckBox : string = '#inlineRadio3'

    private readonly entrepreneurText : string = '[for="inlineRadio3"]'

    private readonly dateOfBirthText : string = '[for="dateofBirth"]'

    private readonly dateOfBirth : string = '[name="bday"]'

    private readonly submitButton : string = '[type="submit"]'

    private readonly twoWayBinding : string = 'h4 input[name="name"]'

    private readonly bottom : string = '.m-0.text-center.text-white'

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

    getGender() {
        return cy.get(this.gender)
    }

    getEmploymentStatus() {
        return cy.get(this.employmentStatus)
    }

    getStudentCheckBox() {
        return cy.get(this.studentCheckBox)
    }

    getStudentText() {
        return cy.get(this.studentText)
    }

    getEmployedCheckBox() {
        return cy.get(this.employedCheckBox)
    }

    getEmployedText() {
        return cy.get(this.employedText)
    }

    getEntrepreneurCheckBox() {
        return cy.get(this.entrepreneurCheckBox)
    }

    getEntrepreneurText() {
        return cy.get(this.entrepreneurText)
    }

    getDateOfBirthText() {
        return cy.get(this.dateOfBirthText)
    }

    getDateOfBirth() {
        return cy.get(this.dateOfBirth)
    }

    getSubmitButton() {
        return cy.get(this.submitButton)
    }

    getTwoWayBinding() {
        return cy.get(this.twoWayBinding)
    }

    getBanner() {
        return cy.get(this.bottom)
    }

}

export default HomePagePOM