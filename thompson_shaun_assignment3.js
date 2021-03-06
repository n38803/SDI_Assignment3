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
	
	//method function		-- function
	//method accessor		-- "getter"
	//method mutator		-- "changer"



//----START--------------------------------------------------------------------------------------

//----GLOBAL VARIABLES----	
var totalCustomers = 3,
	totalRepairs = 5,
	downloadedApps = 20,
	empNames = ["Shaun", 
		"Jon", 
		"Eric", 
		"Matt", 
		"Joseph",  
		"Henry"],
	adjectives = [
		"sleeps on the job",
		"doesn't even know where he is",
		"calls out all the time",
		"thinks he was abducted by aliens",
		"talks like yoda",
		"wears his uniform inside out"
	];
 
//------------------------

//----MAIN OBJECT---------
var store = {
	name: "Wireless South Jersey",										//property string
	staff: 12,															//property number
	technicians: 6,														//property number
	location: function(wsj) {
		if(wsj == "Is This Wireless South Jersey?") { return true; }
		else { return false; }
		},
	humanResources: function(json) {
		for (var i = 0; i < json.employees.length; i++){
			var employee = json.employees[i];
			console.log("User ID: " + employee.id + ", Name: " + employee.name + ", Age: " + employee.age + ", Status: " + employee.status);
			};
	},								//json DATA
	allocation: function(){
		while (totalCustomers > 1) { 									//while loop
			var currentCustomers = (totalCustomers - 1);			
			console.log("There are currently " + currentCustomers + " customers ahead of you, one of our associates will be right with you.");
			totalCustomers--;
																		//for loop (nested)
			for (var i = store.technicians, j = totalRepairs; i > j && j >= 0; i--, j--) {
				var currentRepairs 					//nested loop
				console.log("The expected wait is " + i + " minutes until the next customer can be helped.");		
			};
				
		};
	},											//method procedure (with nested loop)				
	termination: function(exhausted) {
		console.log("Unfortunately, none of my technicians were able to complete your repair.");
		for (var i=0, j=empNames.length; i < j; i++) {					//for loop
			console.log(empNames[i] + " " + adjectives[i] + " ...");
		};
		var fired = "I had to fire them all.";
		console.log(exhausted);
		return fired; 
													//return string
	},								//method procedure	
	repair: device = { 
		name: "HTC EVO",												//property string
		repairable: true,												//property boolean
		problems: 6,													//property number
		issues: ["No Volume", "Freezing", "Drains Battery"],			//property array
	
		software: function(appAmnt, totalIssues) {									
			if (appAmnt > 0 && appAmnt < store.technicians) {
				console.log("There are some minor things we will need to go over before beginning the repair though.");
				if (store.technicians >= 1){
					console.log("I have " + store.technicians + " technicians available to work on your device, I will decide who is best fit for this repair.");
				} else if (store.technicians == 0) {
					console.log("I have " + store.technicians + " technicians available, however, I can go over the overview of your expectations.");
				} else {
					console.log("Not only do I not have any technicians, but there are negative integers floating around my store...");			
				};
			} else {
				console.log("We were unable to locate any issues with the device.");
			};
		var outcome = appAmnt * totalIssues;
			return outcome;												//number return
	},					//method function w/boolean conditional & nested conditional
	
		getRepairTime: function() {
		var totalTime = this.problems * this.issues.length / store.technicians;
		return totalTime;
	},									//method accessor (getter)

		changeRepairTime: function(newProblem){
		this.problems = newProblem;
		}							//method mutator (changer)											
	},												//property object
	
};
//------------------------
	

//----MAIN CODE-----------

if (store.location("Is This Wireless South Jersey?") == false){

console.log("------------------Customer Enters----------------------------");
	store.allocation();

console.log("------------------Customer Has Explained Reason for Visit----");

	//call accessor
	var totalTime = device.getRepairTime();
	console.log("Assuming your initial description of the issue is accurate, the repair itself will take approximately " + totalTime + " hours.");

	//number argument + object argument
	var posIssues = device.software(totalRepairs, device.problems);
	console.log("Based off of the quantity of downloaded applications (" + downloadedApps + "), the amount of directory variables for your issue amounts to nearly " + posIssues + ".");


	//call mutator
	device.changeRepairTime(downloadedApps);												
	console.log("Therefore, we advise up to " + device.getRepairTime() + " hours total to diagnose and repair your " + device.name + ".");

console.log("------------------Customer Returns Hours Later---------------");

	//string argument
	var fired = store.termination("... I just couldn't take it anymore!");
	console.log(fired);

console.log("-------------------------------------------------------------");
console.log("Dear Human Resources, below you will find the information as requested by your office:");	
store.humanResources(json);


} else {
	console.log("Sorry you are at the wrong location. Frown Face, Frown Face!");
};

//------------------------

//----FINISH-----------------------------------------------------------------------------------------
