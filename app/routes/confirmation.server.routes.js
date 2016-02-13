//bring the render from the controller
module.exports = function(app){
    var confirmation = require('../controllers/confirmation.server.controller');
    app.get('/confirmation', confirmation.render);
    app.post('/confirmation', confirmation.contactForm);
};