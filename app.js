const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const protected =  require('./routes/protected');
const public =  require('./routes/public');

const rootDir = require('./util/path'); 
//util/path/ will help us to use everything from root directory
//or to place everypath in the code in root context  

app.use(bodyParser.urlencoded({extended: false}));

app.use('/protected', protected);
//option:1 if we use '/protected' here we can '/' in router/protected.js
//option2: if we use '/' here we can '/protected' in router/protected.js
//By one of the above options every route that is defined under 
//protected.js will work only after /protected/ path means /protected/route..  
//For example, in public.hmtl we created protected-section-1 link
// by /protected/protected-section-1. We also need to keep in mind for POST
app.use(public);
app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views', 'page-not-found.html'));
})

app.listen(3000);