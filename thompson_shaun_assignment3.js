// Shaun M Thompson
// SDI 1301
// 1/24/2013
// Assignment 3

//---START----

	//Object
	//property boolean 		-- employee is a teck/yes or no
	//property array 		-- phones employee can work on
	//property number		-- hours employee is working
	//property string 		-- names of phone employee can work on
	//property object 		-- ??
	
	//method procedure 		-- NO RETURN {all else requires return}
	
	//method function		--
	//method accessor		--
	//method mutator		--
	
	var employee = { 
	name: "Jon",																//property string
	technician: true;															//property boolean
	experience: 3,																//property number
	strengths: ["Repairs", "Sales", "Time Management"],							//property array
	greetCust: function() {														//method procedure
		console.log("Hello, my name is " + name + ", How may I help you?");
	},
	totalDevices: function() {													//method accessor							
		//return
	},
	changeDevices: function(){
		//return
	}
};

var key = "strengths";

console.log(student[key]);
console.log(student.strengths);
console.log(student["strengths"]);

console.log(student["greetCust"]);
console.log(student.greetCust);

employee.greetCust();
employee["greetCust"]();

employee.greetCust = function() {
	console.log("I was fired today, I'm outta here!");
	};
	
employee.greetCust();

//how do we access all of this information?

for (var key in employee) {
	console.log("Key: " + key + ", Value: ", employee[key]);
};

// KEY variable is overwritten each time the loop runs.
//student.key = key is a value in the object
//student[key] = i am calling the variable key

//Argument Boolean
	//back
	//math
	//return boolean
	
//Argument String
	//local variables
	//return string

//Argument Number
	//for loop
		//nested loop
	//return number
	
//Argument Array
	//while loop
	//return array


//---MAIN CODE---
	
//Output
//Retuned values


//---FINISH----

	
