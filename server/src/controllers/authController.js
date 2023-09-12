import { generateToken } from "../jwt/tokens.js";
import * as authServices from "../services/authService.js";

export const login = async (req, res) => {
  try {
    let data = await authServices.login(req.body);

    if (!data.length) {
      res.status(404).json({
        status: 404,
        message: "user not found ",
        data: req.body.email,
      });
    } else {
      let jwt = await generateToken(data);
      res.status(200).json({
        status: 200,
        message: "user found",
        data: data[0],
        token: jwt,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: 500,
      errorInfo: {
        message: "error logging in",
        error: error.message,
      },
    });
  }
};

export const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let user = await authServices.signUp(req.body);

    if (user) {
      let data = await authServices.login({ email, password });
      let jwt = await generateToken(data);
      res.status(200).json({
        status: 200,
        message: "user successfully registered",
        data: data[0],
        token: jwt,
      });
    } else {
      res.status(409).json({ status: 409, message: "user already exists" });
    }
  } catch (error) {
    res.status(500).send({
      status: 500,
      errorInfo: {
        message: "error registering",
        error: error.message,
      },
    });
  }
};
