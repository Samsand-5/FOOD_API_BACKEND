const express = require('express')
const colors = require('colors')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDb = require('./config/db')


//dot en configuration
dotenv.config();

//DB connection
connectDb();
//create rest objects to use express objects
const app = express();

//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

//route
//URL => http://localhost:8080
app.use('/api/v1/test',require('./routes/testRoutes'))


app.get('/',(req,res)=>{
    return res.status(200).send("welcome to server");
});

//PORT
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () =>{
    console.log(`Server running on ${PORT}`.white.bgBlue);   
})