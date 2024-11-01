import { database } from "../db/dataBase.js";
import bcrypt from "bcrypt";
import { generateJwt } from "../helper/generateJwt.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = database.user.find((user) => user.username === username);

    const isValid = bcrypt.compareSync(password, user.password);

    if (!isValid) return res.status(404).json({ message: "contraseña incorrecta" });

    if (!user) return res.status(404).json({ message: "User not found" });

    const token = await generateJwt(user.id);

    res.cookie("authToken", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 1 week
      secure: false,
    });

    res.status(200).json({ message: "acceso concedido" });
  } catch (error) {
    console.log(error);
  }
};

export const session = async (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("authToken");
    res.status(200).json({ message: "cierre de session exitoso" });
  } catch (error) {
    console.log(error);
  }
};
