//----------- Importing Modules -----------//
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');

const app = express();

//-----DB Config---------//
const db = require('./config/keys');

//------Connect to Mongo--------//
// mongoose.connect(db).then(()=>{console.log('connected to  the database');})
// .catch((e)=>{
//     console.log('Error:',e);
// });
//-----EJS---------//
app.use(expressLayouts);
app.use("/assets", express.static('./assets'));
app.set('view engine', 'ejs');

//------BodyParser--------//
app.use(express.urlencoded({ extended: false }));

//---------Express Session----------//
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

//---------Connect Flash----------//
app.use(flash());

//---------Global Variables----------//
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

//-----Routes---------//
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started on port  ${PORT}`));

