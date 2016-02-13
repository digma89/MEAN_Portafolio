//set the title of my new page for routes
exports.render = function(req, res) {
    res.render('about',{
        title: "About me"
    }) 
    
};

