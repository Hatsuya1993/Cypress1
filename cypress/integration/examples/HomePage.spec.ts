import HomePagePOM from './PageObject/HomePagePOM'
import Helper from './Helper/Helper'
import Constants from './Constants/Constants'

describe('Home Page Test', () => { 
    
    let homePagePom: HomePagePOM
    let helper: Helper

    beforeEach(() => {
        homePagePom = new HomePagePOM()
        helper = new Helper()
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

    it('Password should be displayed', () => {
        homePagePom.getPassword().should("be.visible")
    })

    it('Password text should be displayed', () => {
        homePagePom.getPasswordText().should("be.visible")
    })

    it('Checkbox is displayed', () => {
        homePagePom.getCheckBox().should("be.visible")
    })

    it('Checkbox text is displayed', () => {
        homePagePom.getCheckBoxText().should("be.visible")
    })

    it('Gender text is displayed', () => {
        homePagePom.getGenderText().should("be.visible")
    })

    it('Gender is displayed', () => {
        homePagePom.getGender().should("be.visible")
    })

    it('Employment status is displayed', () => {
        homePagePom.getEmploymentStatus().should("be.visible")
    })

    it('Student checkbox is displayed', () => {
        homePagePom.getStudentCheckBox().should("be.visible")
    })

    it('Student text is displayed', () => {
        homePagePom.getStudentText().should("be.visible")
    })

    it('Employed checkbox is displayed', () => {
        homePagePom.getEmployedCheckBox().should("be.visible")
    })

    it('Employed text is displayed', () => {
        homePagePom.getEmployedText().should("be.visible")
    })

    it('Entrepreneur checkbox is displayed', () => {
        homePagePom.getEntrepreneurCheckBox().should("be.visible")
    })

    it('Entrepreneur text is displayed', () => {
        homePagePom.getEntrepreneurText().should("be.visible")
    })

    it('Date of birth text should be displayed', () => {
        homePagePom.getDateOfBirthText().should("be.visible")
    })

    it('Date of birth should be displayed', () => {
        homePagePom.getDateOfBirth().should("be.visible")
    })

    it('Submit button should be displayed', () => {
        homePagePom.getSubmitButton().should("be.visible")
    })

    it('Two way binding input should be displayed', () => {
        homePagePom.getTwoWayBinding().should("be.visible")
    })

    it('Banner should be displayed', () => {
        homePagePom.getBanner().should("be.visible")
    })

    it('Input name should be displayed when data added', () => {
        helper.inputText(Constants[0].homePageName.data, Constants[0].homePageName.name)
        homePagePom.getName().should("have.value",Constants[0].homePageName.name)
    })
    
    it('Input email should be displayed when data added', () => {
        helper.inputText(Constants[0].homePageEmail.data, Constants[0].homePageEmail.name)
        homePagePom.getEmail().should("have.value",Constants[0].homePageEmail.name)
    })

    it('Input password should be displayed when data added', () => {
        helper.inputText(Constants[0].homePagePassword.data, Constants[0].homePagePassword.name)
        homePagePom.getPassword().should("have.value",Constants[0].homePagePassword.name)
    })

    it('Checkbox for password should be displayed when data added', () => {
        homePagePom.getCheckBox().check()
        homePagePom.getCheckBox().should("be.checked")
    })

    it('Gender selects male should be male', () => {
        helper.dropDown(Constants[0].gender.data, Constants[0].gender.male)
        homePagePom.getGender().should("have.value", Constants[0].gender.male)
    })

    it('Gender selects female should be female', () => {
        helper.dropDown(Constants[0].gender.data, Constants[0].gender.female)
        homePagePom.getGender().should("have.value", Constants[0].gender.female)
    })

    it('Checkbox student should not be checked if not selected', () => {
        homePagePom.getStudentCheckBox().should('not.be.checked')
    })

    it('Checkbox student should be checked if selected', () => {
        homePagePom.getStudentCheckBox().check().should('be.checked')
    })

    it('Checkbox Employed should not be checked if not selected', () => {
        homePagePom.getEmployedCheckBox().should('not.be.checked')
    })
 })