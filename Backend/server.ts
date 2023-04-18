// import
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import ErrorHandler from "./MiddleWare/route-not-found";
import config from "./Utils/Config";
import userRouter from './Routes/UserRoutes'
//create server
const server = express();

//handle cors
server.use(cors());

//how we send the data back (JSON,XML,RAW,String)
server.use(express.json());

//parse the body as json , for easy work
server.use(bodyParser.json());

//how to use the routes
server.use("/api/v1/vacation/users", userRouter);
// server.use("/api/v1/vacation/users", loginRouter);

//handle errors (route not found)
server.use("*", ErrorHandler);

//start the server
server.listen(config.WebPort, () => {
    console.log(`listening on http://${config.mySQLhost}:${config.WebPort}`);
  });
