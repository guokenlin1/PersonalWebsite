'use strict'
const express = require("express");
const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');

/**
 * render cover page
 */
app.get("/", function(req, res){
    res.render("main");
})

/**
 * render resume
 */
app.get("/resume", function(req, res){
    res.render("resume");
})


app.listen(3000, function(error){
    if (error) throw error
    console.log("Server created Successfully on PORT 3000")
})