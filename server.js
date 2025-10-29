// Import Frameworks + Modules
const express = require('express')
const path = require('path')

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For parsing the html form in /admin
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res,) => {
    res.send(express.static('index.html'))
});

app.listen(port, () => {
	console.log('Listening on *:3000');
});