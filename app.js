const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-Validator');

var app = express();
const todos = [ "Wash the car" ];

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static('public'));
app.use(expressValidator());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.render('todo_list', { todos: todos });
});

app.post("/", function (req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
})

app.get('/', function(req, res) {
  res.render('todo_list');
});
app.post('/', function(req, res) {
   res.render('todo_list')
});
app.listen(3000, function() {
  console.log('Server has Started');
});
