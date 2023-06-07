const express = require('express');
const https = require('https');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views', __dirname);

app.get('/', (req, res) => {
  let data = '';
  const url = "https://api.wazirx.com/api/v2/tickers";

  https.get(url, function(response) {
    response.on("data", function(chunk) {
      data += chunk;
    });

    response.on("end", function() {
      const jsonData = JSON.parse(data);
      console.log(jsonData.btcinr.buy);

      const templateData = {
        name: 'John',
        age: 25,
        jsonData: jsonData  // Pass the JSON data to the template
      };

      res.render('index', { data: templateData }); // Render the 'index.ejs' template and pass the data
    });
  });
});

app.listen(3000, function() {
  console.log("Server Started at 3000");
});
