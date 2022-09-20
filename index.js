require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
var bodyParser = require("body-parser");
var validUrl = require('valid-url');
var mongoose = require('mongoose');
const mongoUrl = process.env['MONGO_URI'];

// Basic Configuration
const port = process.env.PORT || 3000;
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

let urlSchema = new mongoose.Schema({
  original: {type: String , required: true },
  short: Number
})

let Url = mongoose.model('Url', urlSchema);

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/shorturl', (req,res) =>{
 var link = req.body.url;
 var linkCurto = 0;
 let inputShort = 1;

 //checking if url is valid
  if (validUrl.isWebUri(link)) {
    // finding in the db
      Url.findOne({})
        .sort({short:'desc'})
        .exec((error,result) =>{
              if(!error && result != undefined) {
                inputShort = result.short + 1
              }
              if(!error){
                Url.findOneAndUpdate(
                  {original : link},
                  {original : link, short: inputShort},
                  {new: true, upsert: true},
                  (error, savedUrl) =>{
                      if(!error){
                        linkCurto = savedUrl.short;
                        res.send ( { original_url : link, short_url : linkCurto, "Your New Link":`https://shorten.up.railway.app/${linkCurto}`}) 
                      }
                  }
                )
              }
        });
   
  } else {
    res.send ( { error: 'invalid url' }) 
  }
})

app.get('/:input', (req,res) =>{
  let input = req.params.input;
  Url.findOne({short:input}, (error, result) =>{
      if(!error && result != undefined) {
        res.redirect(result.original)
      } else {
        res.json('URL not found!')
      }
  })
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});