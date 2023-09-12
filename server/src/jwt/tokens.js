import "dotenv/config";
import { SignJWT, jwtVerify } from "jose";

//GENERAR TOKEN
export const generateToken = async (info) => {
  const { _id, username, email } = info[0];
  let infoToken = {
    id: _id,
    usernmae: username,
    email: email,
  };
  const encoder = new TextEncoder();
  const jwt = await new SignJWT(infoToken)
    .setProtectedHeader({
      alg: "HS256",
      typ: "JWT",
    })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(encoder.encode(process.env.PRIVATE_KEY));

  return jwt;
};

//VALIDAR TOKEN
export const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res.status(401).send({ token: "token no asignado o caducado" });
  try {
    const encoder = new TextEncoder();
    req.auth = await jwtVerify(
      authorization,
      encoder.encode(process.env.PRIVATE_KEY)
    );
    next();
  } catch (error) {
    res.status(401).send({
      status: 401,
      errorInfo: { message: "Error de validación", error: error },
    });
  }
};
