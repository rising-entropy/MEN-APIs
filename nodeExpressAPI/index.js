import express from 'express';
import bodyParser from 'body-parser'
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = 5000;

var jsonParser = bodyParser.json()


app.listen(PORT, () => console.log(`Server running on Port http://localhost:${PORT}`));

app.get('/', (req, res) => {
    res.send('Hello There!')
})

let users = [{
        "fName": "Michael",
        "lName": "Ross",
        "age": 26,
        "id": "edf277f4-4f68-4ea3-b394-4ab569c47df4"
    },
    {
        "fName": "Harvey",
        "lName": "Specter",
        "age": 40,
        "id": "a549dd2f-ecbe-4c96-9973-2ae1d98f4a35"
    },
    {
        "fName": "Jessica",
        "lName": "Pearson",
        "age": 55,
        "id": "ebf2b29c-a663-464c-9b7e-0964537e59dc"
    }
]

app.get('/users', jsonParser, (req, res) => {
    res.send(users)
})

app.post('/users', jsonParser, (req, res) => {
    const user = req.body;
    user['id'] = uuidv4();
    users.push(user)
    res.send(`User with username ${user.fName} added to DB `)
})

app.get('/users/:id', jsonParser, (req, res) => {
    let theUser = users.find((user) => user.id === req.params.id)
    res.send(theUser)
});

app.delete('/users/:id', jsonParser, (req, res) => {
    users = users.filter((user) => user.id !== req.params.id)
    res.send('User deleted successfully')
});

app.put('/users/:id', jsonParser, (req, res) => {
    const id = req.params.id
    const { fName, lName, age } = req.body
    const user = users.find((user) => user.id === id);
    if (fName) {
        user.fName = fName
    }
    if (lName) {
        user.lName = lName
    }
    if (age) {
        user.age = age
    }
    users = [...users.filter((user) => user.id !== id), user]

    res.send('User Updated Successfully.')
})