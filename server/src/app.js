console.clear();
import { SERVER } from "./configurations/serverConfig.js";
import { fileURLToPath } from "url";
import path from "path";
import express from "express";
import cors from "cors";
import V1 from "./v1/index.js";

const APP = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIRECTORY = path.join(__dirname, "../../client/dist");
//MIDDLEWARES
APP.use(cors());
APP.use(express.json());

APP.use("/", V1);
APP.use(express.static(DIST_DIRECTORY));

//SERVER LISTEN
APP.listen(SERVER.PORT, () =>
  console.log(`🚀 Server running http://${SERVER.HOST}:${SERVER.PORT}`)
);
