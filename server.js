/*
*
 * Created by rahulmagow on 01/04/17.
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var path=require('path');
var fs=require('fs');
var app=express();
var port=3214;
//example 1
// var url="https://www.google.co.in/"
// request(url,function(err,resp,body){
//     if(err){
//         console.log(err)
//
//     }
//     else{
//         console.log(body)
//     }
// })

//example2
// var destination=fs.createWriteStream('./downloads/google.html');
// var url="https://www.google.co.in/";
// request(url).pipe(destination);

//example3
var destination=fs.createWriteStream('./downloads/google.html');
var url="https://www.google.co.in/";
request(url).pipe(destination).on('finish',function () {
    console.log("done")

}).on('error',function (err) {
    console.log(err);
});

app.listen(port);
console.log("server running on "+port);
*/














