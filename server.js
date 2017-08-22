var express = require('express');
var app = express();

//Loads the static folder for use in routing
app.use(express.static('public'));

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

app.get('/index.html', function(req, res){
  res.sendFile( __dirname + "/" + "index.html")
})

app.get('/process_get', function(req, res){
  //Output in JSON
  response = {
    first_name:req.query.first_name,
    last_name:req.query.last_name
  };
  console.log(response);
  res.send(JSON.stringify(response));
})

var server = app.listen(8081, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});