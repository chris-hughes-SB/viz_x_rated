const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, ()=>{
  console.log('listening on 3000')
})

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/index.html')
  console.log(__dirname)
})

app.post('/price', (req,res)=>{
  console.log(req.body)
  console.log(req.body.age*req.body.multiple)
  var price = req.body.age*req.body.multiple
  res.render('index.ejs', {vals: req.body, price: price})
})
