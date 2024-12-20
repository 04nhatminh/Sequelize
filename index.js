const express = require('express');
const app = express();
const port = 3000;
const expressHbs = require('express-handlebars');
const { createPagination } = require('express-handlebars-paginate');

// static
app.use(express.static(__dirname + '/html'));

// view engine
app.engine(
    'hbs', 
    expressHbs.engine({
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials',
        extname: 'hbs',
        defaultLayout: 'layout',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
        },
        helpers: {
            createPagination,
            formatDate: (date) => {
                return date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                });  
            }, 
        }
    })
);
app.set('view engine', 'hbs');

app.use('/blogs', require('./routes/blogRouter'));
app.get('/', (req, res) => {
    res.redirect('/blogs'); 
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});