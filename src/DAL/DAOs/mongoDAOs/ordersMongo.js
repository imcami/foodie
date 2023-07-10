import { ordersModel } from "../models/ordersModel.js";
import { basicMongo } from "./basicMongo.js";

class ordersMongo extends basicMongo {
  constructor(model) {
    super(model);
  }
}

export const ordersMongo = new ordersMongo(ordersModel);
