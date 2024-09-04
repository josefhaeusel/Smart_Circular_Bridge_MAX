

// set up inlets/outlets/assist strings
setinletassist(0,"udp data in");
setoutletassist(0,"string out");

// global varables and code
var vsep = ""; //empty string

post("HI");

function anything()
{
	var a = arrayfromargs(messagename,arguments);
	
	var r = "";
	for(var i = 0; i < a.length; i++){
		r+=String.fromCharCode(a[i]);
	}
	
	post(r);	
	
	outlet(0,r);	
}
