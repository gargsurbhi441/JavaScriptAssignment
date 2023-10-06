//syntax error
let a= 20;
let a=30;

//type error
try{
    const b=4;
    b=5;
}
catch(error){
    console.log(error.name);
}

//reference error
try{
    let c=5;
    console.log(c+d);
}
catch(error){
    console.log(error.name);
}



finally{
    console.log("finished");
}