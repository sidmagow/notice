/**
 * Created by rahulmagow on 02/04/17.
 */
const fs = require('fs');
   var x="hello"
fs.writeFile("output.txt", x, (err) => {
    if (err) throw err;

    console.log("Written successfully");

});