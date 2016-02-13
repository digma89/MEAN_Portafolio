//set the title of my new page for routes
exports.render = function(req, res) {
    res.render('confirmation',{
        title: "Confirmation"
    }) 
    
};

//set the title of my new page for routes
exports.contactForm = function(req, res) {
    var captcha = req.body.InputReal;
    
    if (captcha == 7){
        var name = req.body.InputName;
        var email = req.body.InputEmail;
        var message = req.body.InputMessage;
        res.render('confirmation',{
            title: "Confirmation",
            name: name
        })
         
    }else{
     var error = '<a href="/contact"><h1>Oops. Something went wrong. If you are really a human, please try again.<h1></a>'
        res.send(error);
    }
    
};