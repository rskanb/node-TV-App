// var fs = require("fs");
var inquirer = require("inquirer");
var Tv = require("./tv.js");
// var axios = require("axios");

var tv = new Tv();


inquirer.prompt([
{
    type: "input",
    name: "name",
    message: "Enter Your search: ",
}
]).then(function(user){
            
            var input = user.name;
            var string = input.split(" ");
            var namestring = string.slice(1).join(" ");
            console.log(string[0]);
            //console.log(name);
            // console.log(input.slice(" ").join(" "));
            if(string[0].toLowerCase().trim() === "show"){
                tv.findShow(namestring);
            }else{ 
                tv.findActor(namestring);
            }
});