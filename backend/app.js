require("dotenv").config();

const express = require("express");
const cors = require("cors");

const port = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

const productRouter = require("./src/routes/ProductRouter.js");
const requestRouter = require("./src/routes/RequestRouter.js");

app.use(productRouter);
app.use(requestRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
