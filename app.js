const express = require('express');
const cors = require('cors');
const path = require('path');
const ApiRoute = require('./routes/ApiRoute');
const PageRoute = require('./routes/PageRoute');
const app = express();
const port = 3000;

app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use('/api', ApiRoute);
app.use('/', PageRoute);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});