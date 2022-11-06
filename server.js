const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routeHandler = require("./routes/index");
require("dotenv").config();
const app = express();

global.__basedir = __dirname;

app.disable("etag");
app.use(express.json({limit: '100mb'}));
app.use(bodyParser.json({limit: '100mb'}));
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
routeHandler(app);

// Handles all errors
app.use((err, req, res, next) => {
    if (process.env.NODE_ENV === "production") {
      return res.status(err.status || 400).send({ success: false });
    }
    if (err) console.log(err);
    return res
      .status(err.status || 400)
      .send({ success: false, message: err.message });
});
  
app.get("/", (req, res) => {
    res.send(`Scello v.1.0 🌎 ${new Date()}`);
});
console.log(`Environnment: ${process.env.NODE_ENV}`);

app.listen(process.env.APP_PORT, () => {
    console.log(`Listening on port: ${process.env.APP_PORT} 🌎`);
});
  