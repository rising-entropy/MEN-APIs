import express from 'express'

const router = express.Router();

const users = [{
    "fName": "John",
    "lName": "Doe",
    "age": 25
}, {
    "fName": "Jill",
    "lName": "Doe",
    "age": 22
}]


export default router.route('/')
    .get((req, res) => {
        res.send(users)
    })
    .post((req, res) => {
        console.log(req)
        res.send("Done")
    })