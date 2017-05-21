const express = require('express');

//Create our app
const PORT = process.env.PORT || 3000;

var app = express();

app.user((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'http') {

  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
})

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Express server is up on port ${PORT}`);
})
