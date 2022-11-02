const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const db = require("./util/database");

db.execute("SELECT * FROM products")
  .then((result) => {
    const m = result[0];
    const n = m.indexOf("title");
    if (n !== -1) {
      return m.splice(n, 1);
    }
    console.log(n, m);
  })
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3001);
