// ΠΡΟΓΡΑΜΜΑ ΠΟΥ ΚΑΝΕΙ ΚΕΦΑΛΑΙ ΤΟ 1ο ΓΡΑΜΜΑ ΚΑΙ ΟΛΑ ΤΑ ΥΠΟΛΟΙΠΑ ΠΕΖΑ
// Δημιουργείς ένα var που αποθηκεύει το όνομα που θα δώσει ο χρήστης
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




// ΠΡΟΓΡΑΜΜΑ ΠΟΥ ΕΜΦΑΝΙΖΕΙ ΑΝΑΛΟΓΑ ΜΕ ΤΗΝ ΗΛΙΚΙΑ ΣΟΥ ΠΟΣΟ ΧΡΟΝΟ ΕΧΕΙΣ ΜΕΧΡΙ ΤΑ 90 

/*
function lifeInWeeks (age){
    var age = prompt("What is your age?");
    var yearsRemaing = 90 - age;
    var days = yearsRemaing * 365;
    var weeks = yearsRemaing * 52;
    var months = yearsRemaing * 12;

    console.log ("You have " + days + " days or " + weeks + " weeks or " + months + " months left until 90.");
}
lifeInWeeks();
*/



/* ΠΡΟΓΡΑΜΜΑ ΠΟΥ ΓΡΑΦΕΙ ΠΟΣΑ ΜΠΟΥΚΑΛΙΑ ΓΑΛΑ ΑΓΟΡΑΖΕΙ ΤΟ ΡΟΜΠΟΤ ΚΑΙ ΥΠΟΛΟΓΙΖΕΙ ΤΑ ΡΕΣΤΑ

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

    // η συνάρτηση για τον υπολογισμό των μπουκαλιών
    console.log("buy " + calcBottles(money, 1.5) +" bottles of milk");

    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    //χωρις συνάρτηση 
    return money%1.5;
    
    //η συνάρτηση για τα ρέστα
    return calcChange(money, 1.5);
    
}
// η συνάρτηση για τον υπολογισμό μπουκαλιων που μπορεί να αγοράσει
function calcBottles(startingMoney, costPerBottle){

    var numOfBottles = Math.floor(startingMoney / costPerBottle);

    return numOfBottles;
}
// η συνάρτηση για τον υπολογισμό από τα ρέστα που πρέπει να επιστραφούν
function calcChange(startingAmount, costPerBottle){
    var change = startingAmount % costPerBottle;
    return change;
}

// εμφανίζει το αποτέλεσμα με την 1 συνάρτηση
getMilk(5);

// εμφανίζει το αποτέλεσμα με τις 2 συναρτήσεις
console.log("Hello sir, here is your " + getMilk(10) + " change");
*/



//BMI CALCULATOR ME FUNCTION

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

/*
function bmiCalculator (weight, height) {
    var bmi = Math.round(weight/(height*height));
    
    if(bmi<18.5){
        return "Your BMI is " + bmi + ", so you are underweight."
    }
    if(bmi>=18.5 && bmi<=24.9){
        return "Your BMI is " + bmi + ", so you have a normal weight."
    }
    if(bmi>24.9){
        return "Your BMI is " + bmi + ", so you are overweight."
    }
}
var bmi=bmiCalculator(65, 1.8);
console.log(bmi);
*/

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/



function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here.    
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return "Leap year."
            }else{
                return "Not leap year."
            }
        }else{
            return "Leap year."
        }
    }else{
        return "Not leap year."
    }

/**************Don't change the code below****************/    

}