import mongoose from "mongoose";
import config from "./index.js";

const URI = config.MONGO_URI;

mongoose
  .connect(URI)
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));
