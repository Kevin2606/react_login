import "dotenv/config";

export const SERVER = {
  PORT: process.env.PORT || 5176,
  HOST: process.env.HOST || "localhost",
};

export const database = {
  USER: "root",
  PASSWORD: "26102610",
  DB: "crud_react",
};
