const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({path:"./config/config.env"});


const restaurantRoutes = require("./routes/restaurantRoutes");


app.use("/api/v1", restaurantRoutes);



app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});