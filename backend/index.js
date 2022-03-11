import dotenv from "dotenv";
import db from "./models/index";
import app from "./src/server";
// import UniveristiesDAO from "./dao/universitiesDAO";

dotenv.config();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

app.get("/", (req, res) => {
  res.send("test");
});
