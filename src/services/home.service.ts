import { HomeModel } from "../models";

export class HomeService {
    public static getHome() {
        let homeModel = new HomeModel();
        homeModel.modelNo = 2;
        homeModel.name = "my home";
        return homeModel;
    }

    public static getFamily() {
        return {members: 3}
    }
}