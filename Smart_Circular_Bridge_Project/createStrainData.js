

// set up inlets/outlets/assist strings
outlets = 8;
setinletassist(0,"json data in");
setoutletassist(0,"index");
setoutletassist(1,"Stain1");
setoutletassist(2,"Stain2");
setoutletassist(3,"Stain3");
setoutletassist(4,"Stain4");
setoutletassist(5,"Stain5");
setoutletassist(6,"Stain6");
setoutletassist(7,"Stain7");


function anything()
{
	var a = arrayfromargs(messagename,arguments);
	
	var r = JSON.parse(a);
	
	post(r.index);
		
	
	outlet(0,r.index);
	outlet(1,r.strain1);
	outlet(2,r.strain2);
	outlet(3,r.strain3);
	outlet(4,r.strain4);
	outlet(5,r.strain5);
	outlet(6,r.strain6);
	outlet(7,r.strain7);	
}
