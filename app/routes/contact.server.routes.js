//bring the render from the controller
module.exports = function(app){
    var contact = require('../controllers/contact.server.controller');
    app.get('/contact', contact.render);
    //retrive the post method of the form 
    app.post('/contact', contact.contactForm);
};



