var express = require("express");
var mongoose = require("mongoose");
var logger = require("morgan")

var app = express();
var PORT = process.env.PORT || 3000;
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// require("./routes/apiRoutes")(app);
// require("./routes/viewRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use(require("./routes/apiRoutes"))
app.use(require("./routes/viewRoutes"))

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});

// DUbootcamp
// Coding199206!@#