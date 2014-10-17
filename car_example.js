function car(color, year, model, make, size) {
    this.color = color;
    this.year = year;
    this.model = model;
    this.make = make;
    this.size = size;
}

var Optima = new car("Black", 2014, "Optima", "Kia", "Compact");
var Liberty = new car("Black", 2014, "Liberty", "Jeep", "Compact SUV");
var M4 = new car("Black", 2014, "M4", "BMW", "Sport Compact");
var IS250 = new car("Black", 2009, "IS250", "Lexus", "Sport Compact");


document.getElementById("cars").innerHTML = 
"<tr><td>" + Optima.make + "</td><td>" + Optima.model + "</td><td>" + Optima.year + "</td></tr>" + "/n" 
+ "<tr><td>" + Liberty.make + "</td><td>" + Liberty.model + "</td><td>" + Liberty.year + "</td></tr>" + "/n"
 + "<tr><td>" + M4.make + "</td><td>" + M4.model + "</td><td>" + M4.year + "</td></tr>" + "/n"
 + "<tr><td>" + IS250.make + "</td><td>" + IS250.model + "</td><td>" + IS250.year + "</td></tr>" + "/n"; 
