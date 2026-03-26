// // Δημιουργείς ένα var που αποθηκεύει το όνομα που θα δώσει ο χρήστης
// var name = prompt("What is your name?");

// // Απομονώνεις το πρώτο γράμμα του ονόματος
// var firstChar = name.slice(0,1);

// // Μετατρέπεις το πρώτο γράμμα από πεζό σε κεφαλαίο
// var upperCaseFirstChar = firstChar.toUpperCase();

// // Απομονώνεις το υπόλοιπο όνομα
// var restOfName = name.slice(1,name.length);

// // Μετατρέπει το υπόλοιπο όνομα σε πεζά
// restOfName = restOfName.toLowerCase();

// // Συνδέεις το πρώτο γράμμα με το υπόλοιπο όνομα
// var capitalisedName = upperCaseFirstChar + restOfName;

// // Εμφανίζεις το αποτέλεσμα
// alert("Hello " + capitalisedName);

/* Πρόγραμμα που γράφει πόσα μπουκάλια γάλα αγοράζει το ρομπότ
function getMilk(money){
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveuP");
    console.log("moveuP");
    console.log("moveuP");
    console.log("moveuP");
    console.log("moveRight");
    console.log("moveRight");
    var buyBottlesMilk = Math.floor(money / 1.5);
    console.log("buy " + buyBottlesMilk +" bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}

getMilk(5);
*/

// Πρόγραμμα που εμφανίζει ανάλογα με την ηλικία σου πόσους μήνες/εβδομάδες/μέρες μένουν μέχρι να φτάσεις 90 χρονών

function lifeInWeeks (age){
    var age = prompt("What is your age?");
    var yearsRemaing = 90 - age;
    var days = yearsRemaing * 365;
    var weeks = yearsRemaing * 52;
    var months = yearsRemaing * 12;

    console.log ("You have " + days + " days or " + weeks + " weeks or " + months + " months left until 90.");
}
lifeInWeeks();