/**
 * Created by rahulmagow on 03/04/17.
 */
var express = require('express');
var app=express();
const scraped= require('./scrape')
const port=3214;
const parser=require('body-parser')

app.use(parser.urlencoded({extended:true}))


app.use('/', express.static(__dirname + "/public_html"));



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

        }
        else{
            console.log("notfound")
            res.send("notfound")

        }
    })
})




app.listen(port);
console.log("server running on "+port);