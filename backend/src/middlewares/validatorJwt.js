import jwt from "jsonwebtoken";
import { database } from "../db/dataBase.js";
export const validatorJwt = (req, res, next) => {
  const token = req.cookies.authToken;

  if (!token)
    return res
      .status(404)
      .json({ message: "no tienes autorización para entra esta parte de lña pagina s" });

  const decode = jwt.verify(token, "elSecretoDeLos7Reinos");

  const user = database.user.find((e) => e.id === decode.id);

  if (!user) return res.status(404).json({ message: "acceso expirado" });

  req.user = user;

  next();
};
