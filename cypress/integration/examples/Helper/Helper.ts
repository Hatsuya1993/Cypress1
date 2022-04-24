import HomePagePOM from '../PageObject/HomePagePOM'

class Helper {

    private homePagePom : HomePagePOM = new HomePagePOM();

    inputText(data : string, value : string) {
        switch(data){
            case "name":
                this.homePagePom.getName().type(value)
                break
            case "email":
                this.homePagePom.getEmail().type(value)
                break
            case "password":
                this.homePagePom.getPassword().type(value)
                break
            default:
                throw new Error("There is no such data")
        }
    }

    dropDown(data: string, value: string){
        switch(data){
            case "gender":
                this.homePagePom.getGender().select(value)
        }
    }

}

export default Helper