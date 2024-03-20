import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import testRoute from "./routes/testRoute.js";
import accountRoute from "./routes/accountRoute.js";
import recordRoute from "./routes/recordRoute.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/test", testRoute);
app.use("/account", accountRoute);
app.use("/record", recordRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Server connected to database");
    app.listen(PORT, () => {
      console.log(`Server listening to port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
