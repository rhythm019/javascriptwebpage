// this is comment ctrl+/

//using functions
function reveal() {
  document.getElementById("message").style.display = "block";
}
function contact() {
  document.getElementById("contactid").style.display = "block";
}

function contact(work) {
  console.log("Are you, " + work + "!");
}
//calling function
contact.call(null, "employee");
contact.apply(null, ["employer"]);

//5 methods for string
var string = "Welcome to Work For You";
console.log("original =" + string);
console.log("uppercase= " + string.toUpperCase());
console.log("lowercase= " + string.toLowerCase());
console.log("slicing1= " + string.slice(2, 4));
console.log("slicing2= " + string.slice(2));
console.log("replacing= " + string.replace("Welcome", "Invited"));

//5 methods for number
var number = 19;
console.log("original =" + number);
console.log("fixed number= " + number.toFixed(2));
console.log("number to string= " + number.toString());
console.log("float number= " + parseFloat("3.14"));
console.log("int number= " + parseInt("19"));
console.log("is not a number= " + isNaN("Welcome"));

//5 methods for array
var list = [5, 6, 7, 8, 9, 0];
console.log("original =" + list);
console.log("adding element= " + list.push(2));
console.log("removing last element= " + list.pop());
console.log("shifting number= " + list.shift());
console.log("joining numbers= " + list.join(","));
console.log("concatinating list= " + list.concat([1, 2]));

//5 methods for date
var presentdate = new Date();
console.log("original =" + presentdate);
console.log("hours= " + presentdate.getHours());
console.log("date= " + presentdate.getDate());
console.log("month= " + presentdate.getMonth());
console.log("year= " + presentdate.getFullYear());
console.log("isostring= " + presentdate.toISOString());
