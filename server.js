const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
    console.log(`${req.method} ${req.url}`);
    next();
    const delta = Date.now() - start;
    console.log(`Time it took for ${req.method} ${req.baseurl} ${delta} ms`);
})

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', {
        title: 'My friends are awesome',
        caption: 'This is my caption',
    });
});
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`Runs on port ${PORT}`);
});