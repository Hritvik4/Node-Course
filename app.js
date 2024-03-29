const express = require('express');

 const app = express();

 //listen for requests
 app.listen(3000);

 app.get('/', (req,res)=> {
    // res.send('home page'); 
    res.sendFile('./views/index.html',{root: __dirname});
 });

 app.get('/about', (req,res)=> {
    // res.send('about page');
    res.sendFile('./views/about.html', {root: __dirname})
 });

//redirects
app.get('/about-us', (req,res)=> {
    res.redirect('/about');
});

//404 error
app.use((req,res)=>{
    res.status(404).sendFile('/views/404.html', {root: __dirname})
}); 

 