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
var empNames = ["Shaun", "Jon", "Eric", "Matt, Joseph, Danny, Thomas, Ralf, Jacob, Henry"];
var adjectives = [
	"sleeps on the job",
	"doesn't even know where he is",
	"calls out all the time.",
	"are all genuinely crazy."
	]; 
//--------------------------------------------------
	


//--OBJECT
var store = {
	name: "Wireless South Jersey",
	staff: 12,
	technicians: 6,
	repair: device = { 
		name: "HTC EVO",												//property string
		repairable: true,												//property boolean
		problems: 6,													//property number
		issues: ["Hardware", "Software", "User Error"],					//property array

// method procedure		

		software: function(appAmnt, totalIssues) {									
		if (appAmnt > 0) {
			console.log("By golly, we have some work to do!");
		} else {
			console.log("I guess there is no software issue with this..")
		};
		var outcome = appAmnt * totalIssues;
			console.log("There are " + outcome + " possible directories for the root of your issue(s).");
			return outcome;
	},					//method function
		repairTime: function() {
		var totalTime = this.problems * this.issues.length / store.technicians;
		return totalTime;
	},									//method accessor (getter)
		addProblem: function(newProblem){
		this.problems = newProblem;
		}							//method mutator (changer)											
	},
	termination: function(exhausted) {
			console.log("After further deliberation, I've decided to terminate everyone!");
			for (var i=0, j=empNames.length; i < j; i++) {
				console.log(empNames[i] + " " + adjectives[i] + " ...");
			}; 
			console.log(exhausted);
	}
};

//----Main CODE-----

	//call procedure
device.software(9, device.problems);

	//call accessor
device.repairTime();
	//output accessor function return
console.log("The time it will take to repair this is generally: " + device.repairTime() + " hours.");

	//call mutator
device.addProblem(20);
	//output mutator function return
console.log("But if you are saying there are more issues, it's going to take " + device.repairTime() + " hours to repair your " + device.name + ".");


store.termination("... I just can't take it anymore!");

