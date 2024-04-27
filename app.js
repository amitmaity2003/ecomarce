const express = require('express');
require("./config/dbConnection");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const rootController = require("./controllers/index")();

app.use("/api", rootController);
app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
});
