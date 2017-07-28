/**
 * Created by rahulmagow on 03/04/17.
 */
var express = require('express');
var app=express();
const scraped= require('./scrape')

const parser=require('body-parser')

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ejs');


app.use(parser.urlencoded({extended:true}))


app.use('/', express.static(__dirname + "/public_html"));

function xyz(t) {

}

app.post('/notice/info', (req,res) => {


    console.log("request recieved to server");
    scraped.gettingData(req.body,function (len) {

        console.log("lengthhhhhhhhhhhh "+len);

        //res.send("success")

       //console.log("pos is:"+pos)


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



app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
