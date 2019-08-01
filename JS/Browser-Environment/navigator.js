console.log(window);

// navigator is also object

console.log(navigator);

console.log(navigator.userAgent);

navigator.geolocation.getCurrentPosition((d) => {
    console.log(d);
});


// Location

