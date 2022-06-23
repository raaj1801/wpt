
const mysql = require('mysql2');

JSON.stringify(result)

//http://localhost:8081/poc2?xyz=3




const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


const bodyParser = require('body-parser');






app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not
app.get('/item, function(req,res');{
console.log("ajax function called");
const dbobject = {
    host: 'localhost',
    user : 'root',
    password : 'cdac',
    database : 'udgir',
    port : 3306
}
}
var result;
app.get('/item, function(req,res');{
    let input = {Bookid:req.query.x, Bookname:req.query.y,price:req.query.z};
    let output = false;
    console.log(input);
    connection.query('insert into Book(Bookid,Bookname,price) values(?,?,?)',
    [input.Bookid,input.Bookname,input.price],(error,whathappened)=>{
        if (err) {
            result = err;
			console.log("Book not added " + err);
        } else {
            result = res1;
			console.log("Book has been added" + result)
        }
    

        
		
		
        res.send(output);
    });
}

app.post('/poc1', function (req, res) {
	
		console.log("reading input " + req.body.v1 +  "  second " + req.body.v2)
		
    	var xyz ={ v1:37, v2:35};
        res.send(xyz);
    });


app.get('/poc2', function (req, res) {
    
	
        console.log("reading input " + req.query.xyz);
		
    	var xyz ={ v1:37, v2:35};

		res.send(xyz);

		});




app.listen(8081, function () {
    console.log("server loading");
})