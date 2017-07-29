/**
 * Created by rahulmagow on 01/04/17.
 */

var x;
let loopId;

function sendMessage() {
    $.post('https://api.plivo.com/v1/Account/MAY2Y3MTM2OTJJNTI0NJ/Message/',
        {
          src:'9868854918',
            dst:'9910490789',
            text:'Btech 4 sem results out!!!'

        },function (data) {
     console.log("message sent")


        })
}
function requesting(){
    $.post('/notice/info',
        {
            //notice:$("#noticeName").val().replace(/ /g,''),
            course:$('#course :selected').text(),
            branch:$('#branch :selected').text(),
            sem:$('#sem  :selected').text(),
            year:$('#year :selected').text(),
            phone:$('#phonenumber').val(),
            name:$('#name').val()


        },function (data) {

            console.log("ajax callback" + data)

            /*if(data=="success")
             {
             refresh1()
             }*/



            if(data==="notfound"){

                $("#notify").text("You Will Be Notified");
            }
            else
            {
                $("#notify").text("Notice is out!");
                clearInterval(loopId);

            }


        })
}
$(function () {



    $("#Submit").click(function () {

        requesting();


        loopId= setInterval(requesting, 5000);
    })





});