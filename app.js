const express = require('express');
const app = express();

app.use((request, response, next)=> {
    console.log('first request');
    next();
})

app.use((request, response, next)=> {
    console.log('second request');
})



app.listen(3000);