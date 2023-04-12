import express from"express"
import mongoose from"mongoose"



if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: "./vars/.env"})
}

const app = express()

const PORT = process.env.PORT;
const DBURI:string = process.env.dbURI


        
// Connect to MongoDB

mongoose.connect(DBURI)
    .then(()=>{
        app.listen(PORT, ()=>{
    console.log("Listening to server in port", PORT)
        })
       console.log("successfully connected to database")

    })
    .catch((err)=>{
        console.log(err)
    })


// // middleware
app.use(express.json());

app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
});