//start writing backend
let express = require("express");
let app = express();

app.use(express.json());

app.listen(1998, () => {
  console.log("app is listening on 1998");
});
