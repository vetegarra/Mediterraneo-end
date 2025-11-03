import { Router } from "express";
import {
  registerUser,
  loginUser,
  listUsers,
  updateUser,
  deleteUser,
  seedAdmin,
} from "../controllers/users.controller.js";

const router = Router();

// Registro y login
router.post("/register", registerUser);
router.post("/login", loginUser);

// Admin: listar, modificar y eliminar
router.get("/", listUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

// Seed admin
router.post("/seed-admin", seedAdmin);

export default router;
