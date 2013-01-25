// Shaun M Thompson
// SDI 1301
// 1/24/2013
// Assignment 3

//---START----

	//Object				-- phone
	//property boolean 		-- the phone is repairable
	//property array 		-- types of known issues for the phone
	//property number		-- current number of issues with device
	//property string 		-- software version of the phone
	//property object 		-- internal application
	
	//method procedure 		-- NO RETURN {all else requires return}
	
	//method function		--
	//method accessor		--
	//method mutator		--

//--GLOBAL VARIABLES	
var repairTime = 10 
var empNames = ["Shaun", "Jon", "Eric", "Matt"]; 
//--------------------------------------------------
	


//--OBJECT
var device = { 
	name: "HTC EVO",												//property string
	repairable: true,												//property boolean
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
	repairTime: function() {
		var totalTime = this.problems * this.issues.length / empNames.length;
		return totalTime;
	},									//method accessor (getter)
	addProblem: function(newProblem){
		this.problems = newProblem;
	}							//method mutator (changer)
											
};


console.log("The time it will take to repair this is generally: " + device.repairTime() + " hours.");
device.addProblem(10);
console.log("But with this many more problems, it will take: " + device.repairTime() + " hours.");


/*

	changeEmployee: function(){
		console.log(empNames[0] + " cannot complete the repair ...");
		for (var i=1, j=empNames.length; i < j; i++) {
			console.log(empNames[i] + ", you're up!");
			if (i+1 !== j){
				console.log("For the love of God, " + empNames[i] + ", can you do anything right?!");
			} else {
				console.log("Team, I think we have a winner! Get started " + empNames[i] + "!");
			};
		};	
		return empNames;
		},									//method mutator (changer) -- DONE
	object: {
		obj1: "1",
		obj2: "2",
		obj3: "3"
	}													//property object
	
	*/
