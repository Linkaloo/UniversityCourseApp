import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import UniveristiesDAO from "./dao/universitiesDAO.js"

dotenv.config()

const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000;

MongoClient.connect(
    process.env.UNI_DB_URI,
    {
        useNewUrlParser: true,
        maxPoolSize: 50,
        wtimeoutMS: 2500,
    }
)
    .catch(err => {
        console.log(err.stack)
        process.exit(1)
    })
    .then(async client => {
        //console.log(client)
        await UniveristiesDAO.injectDB(client)

        app.listen(port, () => {
            console.log(`listening on port: ${port}`)
        })
    })