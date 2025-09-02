import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// ✅ Routes will go here

app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});
