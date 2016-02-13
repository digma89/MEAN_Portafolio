//set the title of my new page for routes
exports.render = function(req, res) {
    res.render('contact',{
        title: "Contact"
    }) 
    
};

//set the title of my new page for routes
exports.contactForm = function(req, res) {
    var name = req.body.name;
 
   var html = 'Hello: ' + name + '.<br>' +
             '<a href="/">Try again.</a>';
  res.send(html);
    
};