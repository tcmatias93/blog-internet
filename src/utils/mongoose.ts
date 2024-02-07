import mongoose from "mongoose";

export default async function ConnectMongo() {
  try {
    await mongoose.connect(
      "mongodb+srv://tcontreras993:CYWAeKyT7NgIdQQZ@cluster0.q6cp2xe.mongodb.net/Blog2"
    );
    console.log("mongoDB conectado");
  } catch (error) {
    console.log(error);
  }
}
