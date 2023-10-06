class Person{
constructor(name1,address1,dob1,passport1){
    this._name= name1;
    this._address= address1;
    this._DOB= dob1;
    this._passport= passport1;
    }
    get name(){
        return this._name;
    }
    set name(x){
        this._name=x;
    }
    get address(){
        return this._address;
    }
    set address(y){
        this._address=y;
    }
    get dob(){
        return this._DOB;
    }
    set dob(z){
        this._DOB=z;
    }
    addressFormat(inputAddress){
        let formattedAddress=inputAddress.split(",");
        console.log("ADDRESS:")
        for (let value of formattedAddress)
            console.log(value);
        }
    ageCalculate(inputDOB){
        let now=new Date();
        let inputDate=new Date(inputDOB);
        let age=now.getFullYear()-inputDate.getFullYear();
        console.log("AGE:"+age);
    }
}

//creating object 
const myObject=new Person('Surbhi','', '', 9087);
//accessing name
console.log(myObject.name);
//setting address and DOB
myObject.address="House No 4669, Sec 23, Gurugram, Haryana";
myObject.dob="June 22 1992";
//accessing methods
myObject.addressFormat(myObject.address);
myObject.ageCalculate(myObject.dob);