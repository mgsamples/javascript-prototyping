function animal(name, type, legs, tail, registered) {
    this.name = name;    
	this.type = type;
    this.legs = legs;
	this.tail = tail;
	this.registered = registered;
}

var animal1 = new animal("lucky", "pitbull", 4, 0, "Y");
var animal2 = new animal("princess", "german shepard", 4, 1, "Y");
var animal3 = new animal("tiny", "spaniel", 4, 0, "N");

if (animal1.registered == "N" ) { alert("Take " + animal1.name + "to Kennel")};
if (animal2.registered == "N" ) { alert("Take " + animal2.name + "to Kennel")};
if (animal3.registered == "N" ) { alert("Take " + animal3.name + "to Kennel")};
