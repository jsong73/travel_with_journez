//importing express library
const express = require("express");
const app = express();
//importing the connection.js file
const sequelize = require("./config/connection");
//connect to the available port if not specified use port 3000
const PORT = process.env.PORT || 3003;

const Model = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

//to connect to port using express
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, (err) => console.log(`listening to port ${PORT}`));
})
