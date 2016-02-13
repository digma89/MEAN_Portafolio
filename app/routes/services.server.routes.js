/*--By Diego Rodriguez 2/13/16
    Title: Personal portafolio */

//bring the render from the controller
module.exports = function(app){
    var services = require('../controllers/services.server.controller');
    app.get('/services', services.render);
};