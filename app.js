const express = require('express');

//express app
 const app = express();
//register new engine
 app.set('view engine', 'ejs');

 //below line used to set ejs files in myviews folder, default is in views
//  app.set('views', 'myviews'); 

  
 //listen for requests
 app.listen(3000);

 
    app.use((req,res)=>{
      console.log('new request made');
      console.log('host: ', req.hostname);
      console.log('path: ',req.path);
      console.log('method: ',req.method);
    })


 app.get('/', (req,res)=> {
    // res.send('home page'); 
    // res.sendFile('./views/index.html',{root: __dirname});

    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Aliquip velit fugiat aute labore cupidatat ad adipisicing tempor est.'},
        {title: 'Mario finds stars', snippet: 'Aliquip velit fugiat aute labore cupidatat ad adipisicing tempor est.' },
        {title: 'How to defeat bower', snippet: 'Aliquip velit fugiat aute labore cupidatat ad adipisicing tempor est.'},
    ];
    res.render('index', {title: 'Home', blogs});
 });

 app.get('/about', (req,res)=> {
    // res.send('about page');
    // res.sendFile('./views/about.html', {root: __dirname})
    res.render('about',{title: 'About' })
 });

 app.get('/blogs/create', (req,res) => {
    res.render('create',{title: 'Create a new blog' })
 })

// //redirects
// app.get('/about-us', (req,res)=> {
//     res.redirect('/about');
// });

//404 error
app.use((req,res)=>{
    // res.status(404).sendFile('/views/404.html', {root: __dirname})
    res.status(404).render('404',{title: 'Error' });
}); 

 