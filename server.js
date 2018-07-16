const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const label = require('./model.js');
const app = express();
const port = process.env.PORT || 5000;

//Connection to mongo lab

mongoose.connect('mongodb://litbit:Litbit123@ds137581.mlab.com:37581/listview', { useNewUrlParser: true });
console.log(mongoose.connection.readyState);


let db = mongoose.connection;
db.on('error', console.error.bind(console, 'mlab connection error'));
db.once('open', () => console.log('mongo lab connected'));

app.get('/search', (req, res) => {
  let { searchString, numResult } = req.query;
  let filterString = '/^' + searchString + '/'
  console.log(filterString);
  let query = { Labels: { '$regex': filterString.slice(1,-1)} }
  console.log(query);
  label.find(query)
    .limit(parseInt(numResult))
    .exec((err, labels) => res.json(labels))
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
