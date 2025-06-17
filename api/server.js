const express = require('express');
const cors = require('cors');
require("dotenv").config();
const { PrismaClient } = require("@prisma/client");

const routes = require("./src/routes.js");

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', routes);

app.listen(process.env.PORT,()=>{
    console.log('Api respondendo em http://localhost:'+process.env.PORT)
});
