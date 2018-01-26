var express = require('express');
var app = express();

//it is a location of static file
//localhost/apiData.png
app.use(express.static('public'));

app.get('/', (req, res) => {

    res.send("Hell, node.js"); // send something to the user.

}); //When the user access home "/", the functions executes.

app.use('/dynamic', (req, res) => {

    var lis = '';

    for (var i = 0; i < 5 ; i++)
    lis = lis + '<li>coding' + i + '</li>';

    
    var dynamic = `<!DOCTYPE html>
    <html>
        <head>
            <meta charset='utf-8'>
            <title>
    
            </title>
        </head>
    
        <body>
            
                ${lis}
                ${Date()}
            
        </body>
    </html>`;

    res.send(dynamic);
});

app.use('/static', (req, res) =>{

    res.send('Hell, apiData, <img src= "/apiData.png" >');
});

app.get('/login', (req, res) => {

    res.send("login, please");

});

app.listen(3000, function() {

    console.log("connected at port: 3000");

});

/**
 * get : called 'router' => it is for finding direction.
 */