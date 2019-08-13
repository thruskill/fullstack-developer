function walkDOM(n){
    
    do{
    console.log(n);
        if(n.hasChildNodes()){
            walkDOM(n.firstChild);
        }

    }while(n = n.nextSibiling)
}

walkDOM(document.body);