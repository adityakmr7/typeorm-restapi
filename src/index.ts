import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as BodyParser from "body-parser";
import * as cors from "cors";
import postRoutes from "./routes/postRoutes";

createConnection()
  .then(async (connection) => {
    const app = express();
    app.use(cors());
    app.use(BodyParser.json());

    app.use("/", postRoutes);

    app.listen(8080, () => console.log("App is running at port 8080."));
  })
  .catch((error) => console.log(error));
