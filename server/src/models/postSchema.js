import { check } from "express-validator";

export const postSchema = [
  check("user.id").isString().notEmpty().withMessage("user id is required"),
  check("user.username")
    .isString()
    .notEmpty()
    .withMessage("user name is required"),
  check("user.email")
    .isString()
    .notEmpty()
    .withMessage("user email is required"),
  check("title").isString().notEmpty().withMessage("post title is requied"),
  check("content")
    .isString()
    .isLength({ max: 200 })
    .withMessage("content must not exceed 200 characters"),
  check("tag").isArray().notEmpty().withMessage("tag is required"),
];

