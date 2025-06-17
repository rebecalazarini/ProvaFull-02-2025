const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();
const { PrismaClient } = require("@prisma/client");

const routes = require("./src/routes.js");

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use('/', routes);
const port = 7000;


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
