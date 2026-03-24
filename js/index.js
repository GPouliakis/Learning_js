// Δημιουργείς ένα var που αποθηκεύει το όνομα που θα δώσει ο χρήστης
var name = prompt("What is your name?");

// Απομονώνεις το πρώτο γράμμα του ονόματος
var firstChar = name.slice(0,1);

// Μετατρέπεις το πρώτο γράμμα από πεζό σε κεφαλαίο
var upperCaseFirstChar = firstChar.toUpperCase();

// Απομονώνεις το υπόλοιπο όνομα
var restOfName = name.slice(1,name.length);

// Συνδέεις το πρώτο γράμμα με το υπόλοιπο όνομα
var capitalisedName = upperCaseFirstChar + restOfName;

// Εμφανίζεις το αποτέλεσμα
alert("Hello " + capitalisedName);
