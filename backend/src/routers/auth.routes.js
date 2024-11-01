import { Router } from "express";
import { login, session, logout } from "../controllers/auth.controller.js";
import { validatorJwt } from "../middlewares/validatorJwt.js";
const router = Router();
router.post("/login", login);
router.get("/session", validatorJwt, session);
router.post("/logout", logout);
export default router;
