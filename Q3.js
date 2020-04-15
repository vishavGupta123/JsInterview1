// Q3. Implement a function strContains(char) that I can use on any string and it returns 
// true/false if the character “char” is present on a string (optimize it as much as possible)

// Example:
// “I am a string”.strContains(‘@’); // should return false
// “I am a string”.strContains(‘a’); // should return true



var string = "Hello World";

//adding new method to String Interface
String.prototype.strContains=function(char){
    //this will refer to the string on which strContains is being called 
    //index will find the place of the character in the string
   var index = this.indexOf(char);

   //if index = -1 then our character is not there in the string and we return false
   if(index===-1){
       return false;
   }
   //else we will return true
   return true;
}

console.log(string.strContains('Z'));