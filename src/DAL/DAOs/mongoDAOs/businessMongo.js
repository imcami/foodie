import { businessMongo } from "./basicMongo.js";
import { businessModels } from "../../mongoDB/models/Business.models.js";

class businessMongo extends basicMongo {
  constructor(model) {
    super(model);
  }
}

export const businessMongo = new businessMongo(businessModels);
