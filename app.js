// gets a new object (the architecture allows us to not have to use the 'new' keyword here)
var g = G$('Raghava', 'Shetty');

// chainable methods
g.greet().setLang('es').greet(true).log();

// let's use our object on the click of the login button
$('#login').click(function() {
   
    // create a new 'Greetr' object (let's pretend we know the name from the login)
    var loginGrtr = G$('Raghava', 'Shetty');
    
     // hide the login on the screen
    $('#logindiv').hide();
    
     // fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
    
});

// create an array 
var array = [ 1, 2, 3 , 4, 5];

// create and initialize aray formatter object
var arrayObj = ArrayFormatter(array);
var sum = arrayObj.sum();
var low = arrayObj.lowest();
var high =  arrayObj.highest()
var descSort = arrayObj.sort("DESC");
console.log("Aray formatter", arrayObj);
console.log("sum", sum);
console.log("low", low);
console.log("high", high);
console.log("descSort", descSort);