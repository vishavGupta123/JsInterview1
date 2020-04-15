//Use of Prototypes in javascript

//let make a function which we will use as a constructor
//our constructor function has three fields 1.Name , 2.City, 3.method to show college details
function College(name, city, numOfBranches) {
  this.name = name;
  this.city = city;
  this.totalNumberOfBranches = numOfBranches;
  this.showCollegeDetails = function () {
    console.log(this.name, " College is situated in ", this.city);
  };
}

//creating a new instance of college
var c1 = new College("Nit Jalandhar", "Jalandhar", 8);
console.log(c1);
//creating another instance of collge
var c2 = new College("Thapar University", "Patiala", 8);
console.log(c2);

//After printing the value of c1 and c2 we see that c1 has different instance of method and c2 has different instance of {showCollgeDetails} method
console.log(c1.showCollegeDetails === c2.showCollegeDetails);

//the  above statement will print false because c1 has different instance of {showCollgeDetails} method and c2 has different instance of
//{showCollegeDetails} method so they makes differnt copy of the method

//this is good if we have to make 2 to 3 instances of the class.But if we have to make multiple objects then this becomes **Memory Consuming**
//because the function is performing the same task but is made new everytime it is created

//so to remove this Prototypes comes into picture

//they will make only one instance of the method which will be shared by every object being created

College.prototype.showTotalNumberOfBranches = function () {
  console.log(this.name + " college has ", this.totalNumberOfBranches);
};

//creating new instance of college
var c3 = new College("Nit kurukshetra", "Haryana", 9);
//console.log the collge c3

console.log(c3);

//try console.log c3.__proto__

console.log(c3.__proto__);
//you will see that simple console log c3 will not show you the new prototype function that was made but when we print c3.__proto__
//it will show us the new prototype function that we created.So this means all the objects will share a common instance of the prototype
//function and will not create a new one when instantiated

console.log(c2.__proto__ === c3.__proto__);
//the above statement will print true because both the objects shares same method
