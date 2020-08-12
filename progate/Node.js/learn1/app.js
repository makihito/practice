const express = require('express');
const app = express();
const mysql = require('mysql');
const { error } = require('console');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'akihito',
  database: 'items'
});

app.get('/', (req, res) => {
  res.render('top.ejs');
})

app.get('/index', (req, res) => {
  connection.query(
    'select * from items',
    (error, results) => {
      console.log(results);
      res.render('index.ejs', { items: results });
    }
  );
});

app.get('/new', (req, res) => {
  res.render('new.ejs');
});

app.post('/create', (req, res) => {
  connection.query(
    'insert into items(name) value(?)', [req.body.itemName],
    (error, results) => {
      connection.query(
        'select * from items',
        (error, results) => {
          res.render('index.ejs', { items: results });
        }
      );
    }
  );
});





// サーバーを起動するコードを貼り付けてください
app.listen(3000);