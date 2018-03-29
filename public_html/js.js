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
            text:'Btech 6 sem results out!!!'

        },function (data) {
     console.log("message sent")


        })
}
function first(objective) {
    var newobj={course:objective.course,
        branch:objective.branch,
        sem:objective.sem,
        year:objective.year,
        month:objective.month,
        phone:objective.phone,
        name:objective.name};
    loopId= setInterval(function(){ requesting(newobj) }, 5000);
}
function requesting(object1){
    $.post('/notice/info',
        {
            //notice:$("#noticeName").val().replace(/ /g,''),
            course:object1.course,
            branch:object1.branch,
            sem:object1.sem,
            year:object1.year,
            month:object1.month,
            phone:object1.phone,
            name:object1.name


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

var obj;


    $("#Submit").click(function () {
        obj={course:$('#course :selected').text(),
            branch:$('#branch :selected').text(),
            sem:$('#sem  :selected').text(),
            year:$('#year :selected').text(),
            month:$('#month :selected').text(),
            phone:$('#phonenumber').val(),
            name:$('#name').val()};
            console.log(obj);
        first(obj);


       // loopId= setInterval(function(){ requesting(obj) }, 5000);
    })





});