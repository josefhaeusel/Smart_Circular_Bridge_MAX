

// set up inlets/outlets/assist strings
outlets = 4;
setinletassist(0,"json data in");
setoutletassist(0,"index");
setoutletassist(1,"ACC1");
setoutletassist(2,"ACC2");
setoutletassist(3,"ACC3");


function anything()
{
	var a = arrayfromargs(messagename,arguments);
	
	var r = JSON.parse(a);
	
	post(r.index);
		
	
	outlet(0,r.index);
	outlet(1,r.ACC1);
	outlet(2,r.ACC2);
	outlet(3,r.ACC3);	
}
