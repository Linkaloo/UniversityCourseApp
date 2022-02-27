import app from "./server.js"
import dotenv from "dotenv"
import UniveristiesDAO from "./dao/universitiesDAO.js"

dotenv.config()

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});

app.get('/', (req, res) => {
    res.send('test');
});
