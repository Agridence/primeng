const express = require("express");
const app = express();
// NOTE: if you need to run helmet config/content security policy locally,
// you should change port to 4200 to comply with CORS origins check by API backend
const port = 8080;
app.use(
  "/",
  express.static(__dirname + '/dist/primeng/browser')
);
app.get("/*", function (req, res) {
  res.sendFile("index.html", {
    root: __dirname + '/dist/primeng/browser',
  });
});
app.listen(process.env.PORT || port, () => {
  console.log(`Server listening on port :${port}/`);
});
