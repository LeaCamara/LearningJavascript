console.log("Hello World");

var test = "Hey Chief, you look great today";
console.log("test", test);

var hoursInYear = 24 * 365;
console.log("hoursInYear", hoursInYear);

// build on values
var minsInDecade = (hoursInYear * 60) * 10;
console.log("minsInDecade", minsInDecade);

var age = 8;
var secondsInYear = hoursInYear * 60 * 60;
var ageInSeconds = secondsInYear * age;
console.log("ageInSeconds", ageInSeconds);

var wiseValue = 35;
if (age >= wiseValue) {
  console.log("You are very wise");
} else {
  console.log("You are young and green");
}

// to fix to 2 DECIMAL places, use .toFixed(2)
var myNum = 2.568574848;
var shortNum = myNum.toFixed(2);
console.log("shortNum", shortNum);

var num = 2;
var num2 = "2";
console.log(num + num2);
// doesn't work b/c num2 is a string

var num = 2;
var num2 = 2;
console.log("add", num + num2, "oh yeah" + " today is cold");

// Can use typeof(VARIABLE) and then check the console to tell us what type it is (number, string, object, etc.)
console.log("Using 'typeof' tells me what TYPE num2 is:", typeof(num2));

// STRINGS
var phrase = "The quick brown fox jumped over the lazy dog";
// JS starts counting on 0, so the letter "T" is 0, h is 1, etc.
console.log("T", phrase.indexOf("T"));
console.log("o", phrase.indexOf("o"));

var phrase2 = "How now brown cow?";
var position = phrase2.charAt(8);
console.log("position", position);
// This tells you what character is at Position 8.

var phrase3 = "The lazy dog";
var newPhrase3 = phrase3.replace("lazy", "silly");
console.log("newPhrase3", newPhrase3);

// putting the dot is a way to access the methods for this object
// (Technically everything in JS is an object.)
// "lazy" and "silly" are both arguments for the replace method.

var phrase4 = "the lazy dog likes the weird fox";
var newPhrase4 = phrase4.replace(/o/g, "i");
console.log("newPhrase4", newPhrase4);
// This globally replaces the o with i. G means global.

// DOM interaction
var phraseString = document.getElementById("phrase").innerHTML;
console.log("phraseString", phraseString);
// This grabs the phrase ID content from our HTML file.
// The .innerHTML pulls exactly what is in between your HTML tags.
// You could also do getElementByClass and pull all the info from all the classes.

var classStuff = document.getElementsByClassName("lotsOfClass");
console.log("all the content of the lotsOfClass class: ", classStuff);
console.log("the second one", classStuff[1]);

var addToDOM = document.getElementById("demo");
addToDOM.innerHTML = "Hi there, NSS ninjas";
// This adds it to the browser page where the div is. But not the index.html page.
// DOM = Document Object Model (document is html/browser page, object is how it's organized, model is the data)

// ARRAYS
var myJunkDrawer = [3, "dime", true, null, "28"];
console.log("myJunkDrawer", myJunkDrawer);
console.log("myJunkDrawer", myJunkDrawer[1]);
// null is holding the #3 slot in this array
// PROTO = prototypes = built-in methods, properties, functions, & other built-in functionality that we can use

myJunkDrawer.push("baseball");
console.log("myJunkDrawer", myJunkDrawer);
// we added baseball to the end of the array

myJunkDrawer.unshift("what is this?");
console.log("myJunkDrawer", myJunkDrawer);
// we added "what is this?" to the beginning of the array

var thing = myJunkDrawer.pop();
console.log("thing", thing);
console.log("after pop", myJunkDrawer);
// pop removed the last thing from the array

// var maxScore = Math.max.apply(Math, scores);
// var minScore = Math.min.apply(Math, scores);
// Easy way to get the maximum and minimum values in an array

// OBJECTS
// Objects can get very in-depth:

var songArray = [];
// empty array
var myObject = {};
// empty object

var song = {
  title: "Call Me Maybe",
  artist: "Carley Rae",
  album: "Greatest Hits",
  awards: ["Big award", "one hit"],
  type: {
    style: "pop",
    listenability: "none",
    producers: {
      name: "Fred Jones",
      name2: "Alice Smith"
    }
  },
  listAwards: function() {
    console.log("Show me the Awards");
  }
};

songArray.push(song);
// pushes all of the above song variable into the empty songArray
console.log("songArray", songArray);
console.log("song", song);
console.log("songArray[0]", songArray[0]);

// find out the key (name) for items in object:
console.log("Object.keys(song)", Object.keys(song));

// NEW SNIPPET:
// Tools - Developer - New Snippet
// File - Save As - "console-log.sublime-snippet"
// console.log("${1}", ${2:value});
// <tabTrigger>cl</tabTrigger>
