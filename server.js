const express = require("express");
const app = express();


// dotenv.config({path:"./config/config.env"});


// const restaurantRoutes = require("./routes/restaurantRoutes");

app.use(express.json());

app.get("/api/v1", (req,res)=>{
    res.status(200).json({
        success:true,
        message:"Res from server"
    })
});



app.listen(5000, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});
