function walkDOM(n){
    
    do{
    console.log(n);
        if(n.hasChildNodes()){
            walkDOM(n.firstElementChild);
        }

    }while(n = n.nextSibiling)
}

walkDOM(document.body);