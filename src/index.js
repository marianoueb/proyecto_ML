const express = require('express');
const app = express();
const path = require('path');

//Server
app.listen(app.get("port"),() => console.log("server start on http://localhost:" +app.get("port")));

//Public Access
app.use(express.static(path.resolve(__dirname,"../public")));

app.set ("port", process.env.PORT || 3000)

//Websites rutas
app.get("/",(req,res) => res.sendFile(path.resolve(__dirname, "./views", "home.html")));
app.get("/login",(req,res) => res.sendFile(path.resolve(__dirname, "./views", "login.html")));
app.get("/register",(req,res) => res.sendFile(path.resolve(__dirname, "./views", "register.html")))