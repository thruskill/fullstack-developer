let ul = document.querySelector('ul');
let li =  document.querySelector('#firstli')
let anc = document.querySelector('#home')

ul.onclick =function(){
    alert("UL clicked");
}

li.onclick = function(){
    alert("LI cclicked");
}

anc.function = function(e){
    // stop nbubbling
    // e.stopPropagation();
    alert("anchor clicked");
}