const express=require("express");
require("dotenv").config();
const app=express();
app.use(express.json());
const userRoutes=require("./routes/user.routes");
const vehicleRoutes=require("./routes/vehicle.routes");
const tripRoutes=require("./routes/trip.routes");
const analyticsRoutes=require("./routes/analytics.routes");
const logger=require("./middlewares/logger.middleware");
const notFound=require("./middlewares/notFound.middleware");
app.use(logger);
app.use("/users",userRoutes);
app.use("/vehicles",vehicleRoutes);
app.use("/trips",tripRoutes);
app.use("/analytics",analyticsRoutes);
app.use(notFound);
app.listen(process.env.PORT,()=>{
    console.log("Server running on port",process.env.PORT);
});