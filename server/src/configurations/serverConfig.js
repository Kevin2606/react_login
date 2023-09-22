import "dotenv/config";

export const SERVER = {
  PORT: process.env.PORT || 5176,
  HOST: process.env.HOST || "192.168.129.72",
};

export const database = {
  USER: "root",
  PASSWORD: "26102610",
  DB: "react_login",
};
