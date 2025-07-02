const mongoose = require("mongoose");
const colors = require("colors");

//function for mongodb database connection
const connectDb= async() =>{
    try {
        await mongoose.connect("mongodb+srv://<soumyodipsutradhar>:<ssoouummyy13mongoose>@cluster0.eshmywu.mongodb.net/food-api");
        console.log(`Connected to Database:${mongoose.connection.host}`.bgCyan)
    } catch (error) {
        console.log("DB Error",error,colors.bgRed)
    }
};

module.exports = connectDb