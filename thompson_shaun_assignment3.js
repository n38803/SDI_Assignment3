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

//--GLOBAL VARIABLES	
var totalRepairs = 10 
var empNames = ["Shaun", "Jon", "Eric", "Matt"]; 
//--------------------------------------------------
	
//--OBJECT
	var device = { 
	name: "HTC EVO",												//property string
	repairable: true;												//property boolean
	problems: 3,													//property number
	issues: ["Freezing", "PowerCycling", "TSP Failure"],			//property array
	delegation: function(repairs, employees) {									
		if (repairs > 0) {
			console.log("By golly, we have some work to do!");
		} else {
			console.log("I guess there is no work for today, you're all fired!")
		};
		var outcome = repairs / employees;
			console.log("Each employee must complete " + outcome + " repairs if we split the workload.");
	},					//method procedure -- DONE
	totalDevices: function() {																				
		//return
	},									//method accessor (getter)
	changeDevices: function(){
		//return
	}									//method mutator (changer)
	var object = {
		item1: "",
		item2: ""
	};												//property object
};
//--------------------------------------------------



// boolean function (true or false w/return)
var canFixPhones = function (minutesPerRepair, hoursPerDay) {
	var workLoad = (hoursPerDay * 60) / minutesPerRepair;
	if (workLoad > totalRepairs) {
		return booReturn === true;
	} else {
		return booReturn === false;
	};
};

// number function 		
var allocation = function(totalCustomers) {
	while (totalCustomers > 0) { 										// condition block
		console.log("Besides repairs, there are " + totalCustomers + " customers in the store.");	// code block
		totalCustomers--;
	}
	return;
};		

//string function
var resignation = function(reason, date) {
	console.log("I have desided to resign on " + date + " because " + reason );
};

// array function
var adjectives = [
	"sleeps on the job",
	"doesn't even know where he is",
	"calls out all the time.",
	"is genuinely crazy."
	];
var termination = function() {
	console.log("I'm firing everyone first!");
	for (var i=0, j=empNames.length; i < j; i++) {
		console.log(empNames[i] + " " + adjectives[i] + " ...");
	}; 
	return console.log("... I just can't take it anymore!");
};

//maincode
delegation(totalRepairs, empNames.length);

var booReturn = canFixPhones(30,8);
	console.log("The thing is, it would be " + booReturn + " to say we can finish these in time.");
	
allocation(6);

resignation("I have gone completely bald from stress", "01/18/2013");

termination();

/*

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

*/



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

	
