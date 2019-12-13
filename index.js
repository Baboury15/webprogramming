const express = require('express');
const  bodyParser = require('body-parser');
const  morgan = require('morgan');
const  pg = require('pg');
const  app= express();

const db = new pg.Client({
    port: 5432,
    password: 'postgres',
    database: 'barbers',
    max: 20,
    host: 'localhost',
    user:'postgres'
});


db.connect()
.then(res => console.log('connected'))
.catch( err => console.log(err));

const PORT = 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/barbers', function(request, response) {

    db.query("SELECT * FROM barbers;", function(err, table) {
        if(err){
            return console.log(request.err)
        }
        else{
            return response.status(200).send(table.rows);
        }
    })
});

app.get('/barbers/:id', (req, res) => {
    const { params: { id } } = req;

    const query = `SELECT * from barbers where id = ${id};`;

res.json(query);
});

        
app.listen(PORT, () => console.log('listining on port ' + PORT));