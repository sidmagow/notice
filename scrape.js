/**
 * Created by rahulmagow on 01/04/17.
 */

var request = require('request');
var cheerio = require('cheerio');
var path=require('path');
var fs=require('fs');


var destination=fs.createWriteStream('./downloads/google4.html');

var url="http://localhost:3214/";
var plivo = require('plivo');
var p = plivo.RestAPI({
    authId: 'MAY2Y3MTM2OTJJNTI0NJ',
    authToken: 'ZWEyZjQ5YmNkNmJhMGIxYTQxMzg4NzQ4ZDU2YjY3'
});

var params = {
    'src': '+919910490789',
    'dst' : '+919868854918',
    'text' : "Btech 4th sem ip results out!!!"
};

/*
function gettingData(val,done) {
    request(url,function (err,resp,body) {
        var $=cheerio.load(body)
        var x=$("table tbody");
        var y=x.html();

        fs.writeFile(destination, y, (err) => {
            if (err) throw err;

            console.log("Written successfully");

        });



    }).pipe(destination).on('finish',function () {
        console.log("done");
    }).on('error',function (err) {
        console.log(err);
    });


    var arr1 = [];

    fs.readFile("output.txt", (err, data) => {
        if (err) throw err;

        //console.log("File was read, data = ");
        var l;

        var str;

        str = data.toString()


        l = str.replace('\r\n\r\n', '');
        l = l.replace(/ /g, "")

        l = l.replace(/\t/g, '')
        l = l.replace('\r\n\r\n', '');

        l = l.replace(/\r\n\r\n/g, '      ')
        l = l.replace(/\r\n/g, '')
        l = l.replace(' ', '');
        arr1 = l.split('      ')

        //console.log(arr1)


        fs.writeFile("updatedOutput.txt", l, (err) => {
            if (err) throw err;


            console.log("okayyyy")

        });


        var pos1;
        var pos2;
        var formattedString;
        var arr = [];

        for (var i = 0, j = 1; i < l.length; i++, j++) {


            if (l.charAt(i) == " ") {
                pos1 = i;

            }


            else if (l.charAt(i) != ' ' && l.charAt(j) == ' ') {

                formattedString = l.slice(pos1 + 1, pos2 + 2);
                pos1 = 0;
                pos2 = 0;
               /!* var obj = {
                    a: formattedString
                }*!/
                arr.push(formattedString);

            }
            else {
                pos2 = i;

            }


        }
       // console.log(arr)


        var bodyArray=[];
        for (var key in val) {

            bodyArray.push(val[key])

        }



        var pos;
         var results=[];


           /!*  for(var j=0;j<bodyArray.length;j++) {
                 for (var i = 0; i < arr.length; i++) {
                     // pos= arr[i].a.search(val)

                     if (arr[i].indexOf(bodyArray[j]) > -1) {
                         results.push(arr[i])
                     }

                 }

                 arr = results;

             }
*!/



         console.log("no of results are:"+results.length)
           for(var i=0;i<results.length;i++){
              console.log(results[i])
           }



         return done(pos);





    })





}
*/



function gettingData(val,done){
    var notice = [];
   console.log("getting Dta func called");

    var pos;
    request('http://164.100.158.135/ExamResults/ExamResultsmain.htm', function(err, res, body)   {
        if(err) {
            throw err;
        }
        $ = cheerio.load(body);
        noticeObject = {
            name: '',
            url: ''
        }
        $('table td [href], table td li [href]').each(function()   {
            var content = $(this);

            var contentText = content.text();



            if(contentText.indexOf(val.course) > -1 ) {

              if(contentText.indexOf(val.branch) > -1) {
                    if(contentText.indexOf(val.sem)> -1) {
                        if(contentText.indexOf(val.year)>-1) {
                            noticeObject.name = contentText;
                            noticeObject.url = content.attr('href');
                            notice.push(noticeObject);
                            p.send_message(params, function (status, response) {
                                console.log('Status: ', status);
                                console.log('API Response:\n', response);
                            });
                            noticeObject = {
                                name: '',
                                url: ''
                            }
                        }
                   }
                }
            };

        });

        //console.log(notice.length);
        console.log(notice)
        done(notice.length);
        notice.pop();
    });



}

function search() {

}
module.exports={
    gettingData,
    search,

}

