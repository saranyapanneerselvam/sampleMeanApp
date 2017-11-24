var path =require('path');
module.exports= function (app) {

    app.get('/',function(req,res){
        res.render('index.ejs');
    });
    app.get('/api/v1/login', function (req, res) {
        res.render('login.ejs');
    });

    app.post('/api/v1/login', function (req, res) {

        console.log('req',req,path.join(__dirname,'../'))
        if (req.body.email=='saranya91mca@gmail.in' && req.body.password=='admin'){
            req.flash("message", "Login Successfully");
             res.locals.messages = req.flash();
            res.render('login.ejs', {});
        }
        else
        // render the page and pass in any flash data if it exists
            req.flash("message", "Bad Credential");
        res.locals.messages = req.flash();
        console.log(res.locals.messages);
        res.render('login.ejs', { 'title': 'myApp'});
          // return res.render('login.ejs', {message: req.flash('loginMessage')});
    });


}