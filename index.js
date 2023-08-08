var http = require('http');
var fs = require('fs');




var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
});

  con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM abc", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    
  

    fs.writeFile('teste.html', 'result'+ JSON.stringify(result), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
    http.createServer(function (req, res) {
      fs.readFile('teste.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
    }).listen(8080);

  }
  );
});



