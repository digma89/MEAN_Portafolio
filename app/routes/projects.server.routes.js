/*--By Diego Rodriguez 2/13/16
    Title: Personal portafolio */

//bring the render from the controller
module.exports = function(app){
    var projects = require('../controllers/projects.server.controller');
    app.get('/projects', projects.render);
};