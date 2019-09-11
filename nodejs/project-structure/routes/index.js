module.exports.index = function(req,res){
    res.render('index', {})
}



module.exports.contact = function(req,res){
    res.render('contact',{
        layout:'layout'
    })
}