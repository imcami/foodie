import { usersMongo } from "../DAL/DAOs/mongoDAOs/usersMongo.js";
import { hashPassword } from "../utils/bcrypt.js";
class userService {
  async findAllUsers() {
    try {
      const response = await usersMongo.findAll();
      return response;
    } catch (error) {
      return error;
    }
  }
  async findAllUser(id) {
    try {
      const response = await usersMongo.findOne(id);
      return response;
    } catch (error) {
      return error;
    }
  }
  async createOneUser(user) {
    try {
      const hashedPassword = await hashPassword(user.password);
      const newUser = { ...user, password: hashedPassword };

      const response = await usersMongo.createOne(user);
      return response;
    } catch (error) {
      return error;
    }
  }
  async daletOneUser(id) {
    try {
      const response = await usersMongo.deleteOne(id);
      return response;
    } catch (error) {
      return error;
    }
  }
}

export const userService = new userService();
