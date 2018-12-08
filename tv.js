var fs = require("fs");
// var inquirer = require("inquirer");
var axios = require("axios");

var Tv = function() {
    this.findShow = function(show){
        axios.get("http://api.tvmaze.com/singlesearch/shows?q="+show)
        .then(function(response){
                var output = "\n" + response.data.name +"\nGenre: "+ response.data.genres[0]+", "+ response.data.genres[1]+", "+response.data.genres[2] +"\n Avg Rating: "+response.data.rating.average+"\n Network: "+ response.data.network.name +"\n Summary: "+response.data.summary + "\n=========================";
                fs.appendFile("./tv.txt", output, function(err){ 
                    if(err){
                        console.log(err);
                    }
                    console.log(output);
                    console.log("file updated");
                });
        }).catch(function (error) {
            console.log(error);
          });
    };
    this.findActor = function(actor){
        axios.get("http://api.tvmaze.com/search/people?q="+actor)
        .then(function(response){
                var output = "\n" + response.data[0].person.name +"\nBirthdate: "+ response.data[0].person.birthday +"\n Gender: "+ response.data[0].person.gender +"\n Country: "+ response.data[0].person.country.name + "\n=========================";
                fs.appendFile("./tv.txt", output, function(err){ 
                    if(err){
                        console.log(err);
                    }
                    console.log(output);
                    console.log("file updated");
                });
        }).catch(function (error) {
            console.log(error);
          });
    };
};
// console.log(Tv.findShow(name))

module.exports = Tv;