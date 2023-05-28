const express = require("express")
const app = express()
const mustacheExpress = require("mustache-express");

// Theme layout
app.use(express.static("theme"))
 
// View engine - Mustache
app.set('views', `${__dirname}/views`);
app.set("view engine", "mustache")
app.engine('mustache', mustacheExpress());

// Routes
app.get("/", (req, res) => {
     res.render("index")

})
const user = { 
    username: "matt",
    bio: "jhihiih",
    age: "26"

}


const userislogged =true
if (userislogged)  { 
console.log(user)
}


// Port listener and hot reloading
app.listen(3000)