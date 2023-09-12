import { Router } from "express";
import * as authControllers from "../../controllers/authController.js";
import { validationSchema } from "../../helpers/validadorSchema.js";
import { loginSchema, registerSchema } from "../../models/authSchemas.js";

const v1Auth = Router();

v1Auth
  .all("/login", validationSchema(loginSchema), authControllers.login)
  .post("/signUp", validationSchema(registerSchema), authControllers.signUp);

export default v1Auth;
