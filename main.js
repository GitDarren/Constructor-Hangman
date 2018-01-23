var inquirer = require("inquirer");
var prompt = require("prompt");
var colors = require("colors");





var count = 0;

var re = function(num){
    if(num<10){
    console.log("something");
    count++;
    re(count);
    }else{
        return "done!";
    }
};

re(count);