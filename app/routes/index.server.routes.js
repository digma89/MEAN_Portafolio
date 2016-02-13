/*--By Diego Rodriguez 2/13/16
    Title: Personal portafolio */

//bring the render from the controller
module.exports = function(app){
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
};

