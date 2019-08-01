console.log(location);


for(let i in location){
    if(typeof location[i] === 'string'){
        console.log(`${i} :${location[i]}`);
    }
}

// location.href="https://www.thruskills.com";


// reload  current window

// location.reload();

// location.assign("https://www.thruskills.com");

// it doesn't create history

// replace()