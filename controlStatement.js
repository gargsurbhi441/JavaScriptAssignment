//if else statement 
var mySal = 500;
var yourSal = 1000;
if( mySal < yourSal)
{
 console.log("My Salary is greater than your salary");
}
else
{
 console.log("My Salary is less than or equal to your salary");
}

//switch statement
var a = '3';
switch (a) {
 case 1:
 console.log('case 1 executed');
 break;
 case 2:
 console.log("case 2 executed");
 break;
 case 3:
 console.log("case 3 executed");
 break;
 case 4:
 console.log("case 4 executed");
 break;
 default:
 console.log("default case executed");
}

//for loop
for (var i = 1; i <= 5; i++)
{
 console.log(i);
}
//for loop with array
const myArray = [5,10,15,20,25];
for(let i=0; i<myArray.length; i++)
console.log(myArray[i]);

//while loop
let j=1;
while (j<=5){
    console.log(j);
    j++;}

//do-while loop
let k=1;
do{
    console.log(k);
    k++;
}while(k<=5)

