// Shaun M Thompson
// SDI 1301
// 1/24/2013
// Assignment 3


//----GUIDE--------------------------------------------------------------------------------------
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



//----START--------------------------------------------------------------------------------------

//----GLOBAL VARIABLES----	
var totalCustomers = 3,
	totalRepairs = 5,
	downloadedApps = 20,
	empNames = ["Shaun", "Jon", "Eric", "Matt, Joseph, Danny, Thomas, Ralf, Jacob, Henry"],
	adjectives = [
	"sleeps on the job",
	"doesn't even know where he is",
	"calls out all the time.",
	"are all genuinely crazy."
	]; 
//------------------------
	


//----MAIN OBJECT---------
var store = {
	name: "Wireless South Jersey",										//property string
	staff: 12,															//property number
	technicians: 6,														//property number
			
	termination: function(exhausted) {
		console.log("Unfortunately, none of my technicians were able to complete your repair.");
		for (var i=0, j=empNames.length; i < j; i++) {					//for loop
			console.log(empNames[i] + " " + adjectives[i] + " ...");
		}; 
		var fired = "Leave your tools and get out!";
		console.log(exhausted);
		return fired;													//return string
	},								//method procedure
		
	repair: device = { 
		name: "HTC EVO",												//property string
		repairable: true,												//property boolean
		problems: 6,													//property number
		issues: ["No Volume", "Freezing", "Drains Battery"],			//property array
	
		software: function(appAmnt, totalIssues) {									
		if (appAmnt > 0) {
			console.log("There are some minor things we will need to go over before beginning the repair though.");
			
		} else {
			console.log("We were unable to locate any issues with the device.")
		};
		var outcome = appAmnt * totalIssues;
			return outcome;												//number return
	},					//method function
	
		repairTime: function() {
		var totalTime = this.problems * this.issues.length / store.technicians;
		return totalTime;
	},									//method accessor (getter)

		addProblem: function(newProblem){
		this.problems = newProblem;
		}							//method mutator (changer)											
	},
	
	
};
//------------------------
	

//----MAIN CODE-----------
	
	//call accessor
	var totalTime = device.repairTime();
	console.log("Based off of the initial description provided, the repair itself will take no less than " + totalTime + " hours.");

	//number argument + object argument
	var posIssues = device.software(totalRepairs, device.problems);
	console.log("Based off of the amount of downloaded applications (" + downloadedApps + "), the amount of variable directories for your issue amounts to nearly " + posIssues + ".");


	//call mutator
	device.addProblem(downloadedApps);												
	console.log("Therefore, we advise up to " + device.repairTime() + " hours total to diagnose and repair your " + device.name + ".");

	//string argument
	var fired = store.termination("... I just can't take it anymore!");
	console.log(fired);
//------------------------

//----FINISH-----------------------------------------------------------------------------------------
