const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
var morgan = require('morgan');

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'))

app.engine('hbs', exphbs.engine({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})