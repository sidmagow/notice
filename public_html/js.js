/**
 * Created by rahulmagow on 01/04/17.
 */

var x;
let loopId;
function requesting(){
    $.post('/notice/info',
        {
            //notice:$("#noticeName").val().replace(/ /g,''),
            course:$('#course :selected').text(),
            branch:$('#branch :selected').text(),
            sem:$('#sem  :selected').text()

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


        loopId= setInterval(requesting, 10000);
    })





});