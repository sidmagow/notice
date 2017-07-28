/**
 * Created by rahulmagow on 03/04/17.
 */
var express = require('express');
var app=express();
const scraped= require('./scrape')
const port=3214;
const parser=require('body-parser')


var plivo = require('plivo');
var p = plivo.RestAPI({
    authId: 'MAY2Y3MTM2OTJJNTI0NJ',
    authToken: 'ZWEyZjQ5YmNkNmJhMGIxYTQxMzg4NzQ4ZDU2YjY3'
});

app.use(parser.urlencoded({extended:true}))


app.use('/', express.static(__dirname + "/public_html"));

var params = {
    'src': '+919910490789',
    'dst' : '+919868854918<+918447672199<+919818110944',
    'text' : "Btech 4th sem ip results out!!!"
};

app.post('/notice/info', (req,res) => {


    console.log("request recieved to server");
    scraped.gettingData(req.body,function (len) {

       console.log(" callback func done is called    is called")
        //res.send("success")

       //console.log("pos is:"+pos)
        console.log(len)

        if(len>=1){
            console.log("found")
            res.send("found")
            p.send_message(params, function (status, response) {
                console.log('Status: ', status);
                console.log('API Response:\n', response);
            });


        }
        else{
            console.log("notfound")
            res.send("notfound")

        }
    })
})




app.listen(port);
console.log("server running on "+port);