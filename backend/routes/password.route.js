import express from "express"
import { createPassword, getAllPasswords } from "../controllers/password.controller.js"


const router = express.Router()

router.post("/", createPassword)
router.get("/", getAllPasswords)

export default router