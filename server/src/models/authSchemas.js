import { check } from "express-validator";

export const loginSchema = [
  check("email").isEmail().notEmpty().withMessage("email is required"),
  check("password").isString().notEmpty().withMessage("password is required"),
];

export const registerSchema = [
  check("username").isString().notEmpty().withMessage("username is required"),
  check("email").isEmail().notEmpty().withMessage("email is required"),
  check("password").isString().notEmpty().withMessage("password is required"),
];
