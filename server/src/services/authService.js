import { connDB } from "../databases/connectDB.js";

//LOG IN
export const login = async (info) => {
  let db = await connDB();
  let collection = db.collection("users");
  let resultado = await collection
    .find({ email: info.email, password: info.password })
    .toArray();

  if (!resultado.length) return [];

  return [
    {
      _id: resultado[0]._id,
      username: resultado[0].username,
      email: resultado[0].email,
    },
  ];
};

//REGISTER

export const signUp = async (info) => {
  let db = await connDB();
  let collection = db.collection("users");

  let user = await collection.find({ email: info.email }).toArray();

  if (!user.length) {
    await collection.insertOne(info);
    return true;
  } else {
    return false;
  }
};
