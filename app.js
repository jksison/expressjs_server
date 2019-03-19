const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');


const app = express();

app.engine('hbs', expressHbs());
app.set('view engine', 'hbs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/favicon.ico', (req, res) => {
    res.status(204);
});

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);



app.use((req, res, next) => {
    //res.status(404).sendFile(path.join(__dirname, 'views','404.html'));
    res.status(404).render('404');
});

app.listen(3000);