import express from 'express';
import bodyParser from 'body-parser'

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({
    extended: true
}));


app.listen(PORT, () => console.log(`Server running on Port http://localhost:${PORT}`));

app.get('/', (req, res) => {
    res.send('Hello There!')
})

const users = [{
    "fName": "John",
    "lName": "Doe",
    "age": 25
}, {
    "fName": "Jill",
    "lName": "Doe",
    "age": 22
}]

app.get('/users', (req, res) => {
    res.send(users)
})
app.post('/users', (req, res) => {
    console.log('yo')
    res.send("Its Done")
})