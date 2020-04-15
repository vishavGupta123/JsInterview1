// Q2. Implement a function propertyExists(obj, path) that takes in an object and a path
// (string) as arguments and returns ‘False’ if the property doesn’t exist on that object
//  or is null, else returns the value of the property

// var obj1 = {
//     a:1,
//     b:2
// }

const obj = {
  a: 1,
  b: 2,
  c: {
    d: 100,
    e: {
      f: 45,
    },
  },
};

function propertyExists(obj, path) {
  console.log(obj);
  //split the path into an array so the we can iterate over each individual property
  var property = path.split(".");

  console.log(property);
  for (let i = 0; i < property.length; i++) {
    //if the obj has a property with specified name OR obj is not undefined then assign object to the Object[Propery[i]];
    if (obj.hasOwnProperty(property[i]) || obj != undefined) {
      obj = obj[property[i]];
    }
    //else return false
    else {
      return false;
    }
  }
  return obj;
}

let value = 0;
console.log(propertyExists(obj, "c.d"));
console.log(propertyExists(obj, "c.e.f"));
