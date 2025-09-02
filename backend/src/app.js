const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());


const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});
