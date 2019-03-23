const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database/index.js');

const app = express();

app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/posts', (req, res) => {
  if (!req.body) {
    console.log('Not Found');
  } else {
    db.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
    })
      .limit(100)
      .sort({ _id: -1 })
      .catch((err) => {
        console.log(err);
      });
  }
});

app.post('/addPost', (req, res) => {
  if (!req.body) {
    console.log('Not Found');
  } else {
    const newUser = new db(req.body);
    newUser.save((err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(newUser);
      }
    });
  }
});

const port =  process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

