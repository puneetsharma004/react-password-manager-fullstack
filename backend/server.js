import express from "express"
import cors from "cors"
import dotenv from "dotenv"                          // ✅ fixed typo
import passwordRouter from "./routes/password.route.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000               // ✅ fixed typos

app.use(cors())
app.use(express.json())

app.use("/api/passwords", passwordRouter)           // ✅ was missin

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})