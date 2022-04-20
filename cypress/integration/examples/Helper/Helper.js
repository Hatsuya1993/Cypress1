"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HomePagePOM_1 = __importDefault(require("../PageObject/HomePagePOM"));
class Helper {
    constructor() {
        this.homePagePom = new HomePagePOM_1.default();
    }
    inputText(data, value) {
        switch (data) {
            case "name":
                this.homePagePom.getName().type(value);
                break;
            case "email":
                this.homePagePom.getEmail().type(value);
                break;
            default:
                throw new Error("There is no such data");
        }
    }
}
exports.default = Helper;
