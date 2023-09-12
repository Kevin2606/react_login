import { Router } from "express";
import v1Auth from "./routes/authRoute.js";

const V1 = Router();

V1.use("/auth", v1Auth)

export default V1;