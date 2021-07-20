import express from 'express';
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/users', usersRoutes);

app.listen(PORT, () => console.log(`Server running on Port http://localhost:${PORT}`));

app.get('/', (req, res) => {
    res.send('Hello There!')
})