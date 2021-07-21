import express from 'express';
import bodyParser from 'body-parser'
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = 5000;

import { MongoClient } from "mongodb";
const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const client = new MongoClient(uri);

var jsonParser = bodyParser.json()

app.listen(PORT, () => console.log(`Server running on Port http://localhost:${PORT}`));

app.get('/', (req, res) => {
    res.send('Test for SoftEzi')
})

async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        // Establish and verify connection
        await client.db("softEzi").command({ ping: 1 });
        console.log("Connected successfully to server");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);