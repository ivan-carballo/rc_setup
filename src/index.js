import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongo.js";

import router from "./routes/router.js";

dotenv.config();
const CONTAINER_PORT = 3000;

const app = express();

connectDB();


app.use(express.static("public")); // permite mostrar archivos en la carpeta public

app.set("views","./views");
app.set("view engine","pug");

app.use(express.json()); // permite leer el body de llamadas POST y PUT tipo JSON
app.use(express.urlencoded({extended:true})); // permite leer el body de llamadas POST y PUT tipo URL Encoded


app.use("/",router);

app.listen(CONTAINER_PORT ,()=>{
    console.log("Aplicacion en marcha en el puerto "+process.env.APP_PORT);
})