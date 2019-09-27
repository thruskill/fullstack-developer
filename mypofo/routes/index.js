const data = require('../data');




module.exports.index = function(req,res){
    res.render('index',{
        title: 'MyPortfolio - Vallab',
        layout:'layout'
    });
}

module.exports.indexFile = function(req,res){
    res.render('index1',{
        tile:'index1',
        layout:'indexpofolayout'
    });
}


module.exports.projectList = function(req,res) {
    console.log(data.myProjects);
    res.render('project-list',{
        title:'project Lists',

        navProject:true,
        projects:data.myProjects
        
    });
}

module.exports.projectDetail = function(req,res){

    let alias = req.params.alias;
    let index = data.projectIndex[alias];
    // console.log(alias);
    // console.log(data.myProjects[index]);
    res.render('project-detail',{
        title:'Project Detail',
        navProject:true,
        project: data.myProjects[index]
        
    })
}

// contact

module.exports.contactForm = function(req, res){
    res.render('contact',{
        title:'contact',
        // layout:'contactlayout'
        navContact:true
    })
}

// about
module.exports.aboutPofo =function(req,res){
    res.render('about',{
        title:'about',
        navAbout:true
    })
}



module.exports.blogList = function(req,res){

    res.render('blogs',{
        title:'blog',
        navBlog:true
        
    })
}

module.exports.getLogin = function(req,res){
    res.render('login',{
        title:'login',
        layout:'signin-layout'
    })
}


// users information in array list

const users = [{email:'vallab@gmail.com', password:'123'},
{email:'test@t.com', password:'test'}]



module.exports.doLogin = function(req,res){
    let body = req.body;
   

    // here we will checck  the list by filter wheather the entered details are present in array or not when login,if there  it will print
    let usr = users.filter(ele => body.email == ele.email)[0];


    // this if statement will check the details provided in the body ,if user or pswd is wrong it will throw error,if correct it will redirect to admin
    if(usr && usr.password == body.password){
         console.log(body);
        req.session.user = usr;
        req.session.isLoggedIn = true;
         res.redirect('/admin'); 
    }else {
            res.render('login', {
            title:'Login',
            layout:'signin-layout',
            error:'User credentials not correct'
        })
    }
}

module.exports.getSignup = function(req,res){
    res.render('signup',{
        title:'Create an Account',
        layout:'signin-layout'
    })
}

module.exports.doSignup = function(req,res){
    let body = req.body;
    console.log(body);
    res.redirect('/login');
}

module.exports.admin = (req,res) => {
    console.log(req.session);
    res.render('dashboard',{
        title:'Dashboard'
    })    
}


module.exports.doContact =(req,res) =>{
    let body =req.body;
    console.log(body);
    if(body.name == ''){
        res.status(400).json({message:'Name field is required'});
    }else{
        res.json({message:'contact submittedd successfully' })
    }
}