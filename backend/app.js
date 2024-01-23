const express = require('express');
const cors = require('cors')
const app = express();
const port = 3001

require("./src/routes/tutorial.routes")(app);

var corsOptions = {
    origin: "http://localhost:8081"
  };



app.use(cors(corsOptions))

const db = require("./src/models/");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.get('/', (req, res) => {
    res.send('hello world!')
}); 

app.get(`/api/test`, (req, res) => {
    res.json({msg: "in a bottole!"})
});

app.listen(port, () => {
    console.log(`Listening on port port ${port}`)
    console.log(` app test at localhost:${port}/`)
})