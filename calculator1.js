//Calculator JavaScript by Julian Cheung
function Weighted() {
	var inp=document.getElementsByTagName("input");
	var arr=[];
	var g1,g2,g3,g4,totalp;
	//iterates through the form inputs
	for(var i=0; i<inp.length; i++)
	{
		//to change the input to a float/number
		arr[i]=parseFloat(inp[i].value);
		if(isNaN(arr[i])){
			arr[i]=0;
		}
		//calculating each row
		g1= arr[i-11]*arr[i-10]/arr[i-9];
		g2= arr[i-8]*arr[i-7]/arr[i-6];
		g3= arr[i-5]*arr[i-4]/arr[i-3];
		g4= arr[i-2]*arr[i-1]/arr[i];
		totalp= arr[i-2]+arr[i-5]+arr[i-8]+arr[i-11];
	}
	// 0/0 will give NaN
	if(isNaN(g1)){
		g1=0;
	}

	if(isNaN(g2)){
		g2=0;
	}

	if(isNaN(g3)){
		g3=0;
	}

	if(isNaN(g4)){
		g4=0;
	}

	var result=(g1+g2+g3+g4)/totalp;

	if(isNaN(result)){
		result=0;
	}
	//made it into a precision so it limits the number of decimals
	document.getElementById('result').innerHTML= (result.toPrecision(2))*100 + "%";
}

function Mean(){
	// similar way to the weighted function with count instead of totalp
	var count=4;
	var inp=document.getElementsByTagName("input");
	var arr=[];
	var g1,g2,g3,g4;

	for(var i=0; i<inp.length; i++)
	{
		arr[i]=parseFloat(inp[i].value);
		if(isNaN(arr[i])){
			arr[i]=0;
		}
		g1= arr[i-10]/arr[i-9];
		g2= arr[i-7]/arr[i-6];
		g3= arr[i-4]/arr[i-3];
		g4= arr[i-1]/arr[i];
	}

	if(isNaN(g1)){
		g1=0;
		count-=1;
	}

	if(isNaN(g2)){
		g2=0;
		count-=1;
	}

	if(isNaN(g3)){
		g3=0;
		count-=1;
	}

	if(isNaN(g4)){
		g4=0;
		count-=1;
	}

	var result=(g1+g2+g3+g4)/count;

	if(isNaN(result)){
		result=0;
	}

	document.getElementById('result').innerHTML= (result.toPrecision(2))*100 + "%";
}

//creativity points
function Reset(){
	document.getElementById("gc").reset();
	document.getElementById("result").innerHTML= "";
}