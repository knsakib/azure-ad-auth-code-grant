const path = require('path');
const express = require('express');

const rootDir = require('../util/path'); 
const router = express.Router();

router.get('/protected-section-1', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'protected.html'));
});

router.post('/protected-section-1', (req, res, next)=>{
    console.log(req.body); 
    res.redirect('/')
});

module.exports=router;