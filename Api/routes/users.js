import express from "express";
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/user.js"

const router = express.Router();

router.get("/", getUsers);

router.post("/", addUser); /*na raiz eu chamo o add para adicionar*/

router.put("/:id", updateUser); /* aqui vai precisar de um id para fazer o update*/

router.delete("/:id", deleteUser); /* aqui a mesma coisa, vai receber o id para fazer o delete*/

export default router;