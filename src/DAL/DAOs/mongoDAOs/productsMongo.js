import { productsModels } from "../../mongoDB/models/products.models.js";
import { basicMongo } from "./basicMongo.js";

class productsModels extends basicMongo {
  constructor(model) {
    super(model);
  }
}

export const productsMongo = new productsMongo(productsModels);
