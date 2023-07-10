import { userService } from "../services/users.service.js";

class usersController {
  async findAllUsers(req, res) {
    try {
      const allUsers = await userService.findeAllUsers();
      res.status(200).json({ message: "Users", allUsers });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async findOneUser(req, res) {
    const { idUser } = req.params;
    try {
      const user = await userService.findOneUser(id);
      res.status(200).json({ message: "User", user });
    } catch (error) {
      res.status(500).json({ message: "Error", error });
    }
  }
  async createOneUser(req, res) {
    const { first_name, last_name, email, password } = req.body;
    if (!first_name || !last_name || !email || !password) {
      res.status(400).json({ message: "Missing fields" });
    }
    try {
      const newUser = await userService.createOneUser(req.body);
      res.status(200).json({ message: "User created", newUser });
    } catch (error) {
      res.status(500).json({ message: "Error", error });
    }
  }
  async delateOne(req, res) {
    const { idUser } = req.params;
    try {
      const user = await userService.delateOne(idUser);
      res.status(200).json({ message: "User delated", user });
    } catch (error) {
      res.status(500).json({ message: "Error", error });
    }
  }
}

export const usersController = new usersController();
