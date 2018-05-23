// import * as path from "path";
import * as express from "express";
import * as bodyParser from "body-parser";
import { apiEndpoint } from "./graphql/api";

const app = express();

app.use("/api", bodyParser.json(), apiEndpoint);
app.use(express.static("./dist/public/"));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(".") + "/dist/index.html");
// });

app.listen(8080, () => {
  console.log("Ready and listening on port", 8080);
});
