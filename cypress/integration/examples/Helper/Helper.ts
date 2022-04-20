import HomePagePOM from '../PageObject/HomePagePOM'

class Helper {

    private homePagePom : HomePagePOM = new HomePagePOM();

    inputText(data : String, value : string) {
        switch(data){
            case "name":
                this.homePagePom.getName().type(value)
                break
            case "email":
                this.homePagePom.getEmail().type(value)
                break
            default:
                throw new Error("There is no such data")
        }
    }

}

export default Helper