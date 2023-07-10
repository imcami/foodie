import { usersModels } from "../../mongoDB/models/Users.models.js";
import { basicMongo } from "./basicMongo.js";

class usersMongo extends basicMongo {
  constructor(model) {
    super(model);
  }
}

export const usersMongo = new usersMongo(usersModels);
