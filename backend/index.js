const express = require("express");
const cors = require("cors");
const allRoutes = require("./routes/index");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use("/v1", allRoutes);

app.listen(PORT, () => {`Server is running on PORT : ${PORT}`});