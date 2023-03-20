const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


var baseurl = "https://mcstaging.hookah-shisha.com/rest/V1/";
const accessToken = 'b1aesdmtfhr1b357ev67s49syk7b9k71';

// Get Route For Main Page
app.get('/', (req, res) => {
  res.render("index");
});


app.post('/auth', async (req, res) => {
  console.log(req.body);
  mData = req.body;
  var Dob = mData.year + "-" + mData.month + "-" + mData.day;
  var body = {
    "customer": {
      "email": mData.email,
      "firstname": mData.firstname,
      "lastname": mData.lastname,
      "dob": mData.year + "-" + mData.month + "-" + mData.day,
      "store_id": 59,
      "website_id": 32
    },
    "password": mData.password
  }
  console.log(body);
  if (mData.email && mData.firstname && mData.lastname && Dob) {
    console.log(body);
    var Mresponse = await fetch(baseurl + "customers",
      {
        method: 'POST',
        headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${accessToken}` },
        body: JSON.stringify(body)
      });
    if (Mresponse.status == 200) {
      res.redirect('https://uae-ooka-stage.webscale.support/en');
    }
    else {
      console.log(Mresponse);
      console.log(await Mresponse.json());
      res.render("index",
        {
          message: "Error"
        });
    }
  }
  else {
    console.log("==== Invalid Data");
    res.render("index",
      {
        message: "Error"
      });
  }

});

app.listen(3000, () => console.log(`=== Starting your app on http://localhost:3000} ===`));

