import bycrypt from "bcryptjs";
import config from "../config/index.js";

export const hashPassword = (data) => {
  return bycrypt(data, config.salt);
};

export const comparePassword = async (data, hashdata) => {
  return bycrypt.compare(data, hashdata);
};
