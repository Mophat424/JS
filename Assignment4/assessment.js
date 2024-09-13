//1. Write a JavaScript program to list the properties of a JavaScript object.
console.log("\nUsing Object.keys() method:");
const properties = Object.keys(student);
console.log(properties);



//2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = { 
    name: "David Rayy", 
    sclass: "VI", 
    rollno: 12 
  };
  
  console.log("Before deleting rollno:", student);
  delete student.rollno;
  console.log("After deleting rollno:", student);



//3. Write a JavaScript program to get the length of a JavaScript object.
  var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  
  var objectLength = Object.keys(student).length;
  
  console.log("Length of the student object:", objectLength);


  //4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books
  var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
 ];
 
 
 library.forEach(function(book) {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Reading Status: ${book.readingStatus}`);
    console.log('---');
 });

 


 //5. Write a JavaScript program that returns a subset of a string.
//Sample Data: dog
//Expected Output: ["d", "do", "dog", "o", "og", "g"]
 function getSubsets(str) {
  const subsets = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      subsets.push(str.substring(i, j));
    }
  }

  return subsets;
}

const inputString = "dog";
const subsets = getSubsets(inputString);
console.log(subsets);


//6.  Write a JavaScript program to sort an array of JavaScript objects.
const library = [
    {
      title: 'The Road Ahead',
      author: 'Bill Gates',
      libraryID: 1254
    },
    {
      title: 'Walter Isaacson',
      author: 'Steve Jobs',
      libraryID: 4264
    },
    {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      libraryID: 3245   
  
    }
  ];
  
  
  library.sort((a, b) => {
    if (a.author < b.author) {
      return -1;
    }
    if (a.author > b.author) {
      return 1;
    }
    return 0;
  });
  
  console.log(library);
 

  //7 . Write a JavaScript function to print all the methods in a JavaScript object.


  function all_properties(obj) {
    const properties = [];
    for (const prop in obj) {
      if (typeof obj[prop] === 'function') {
        properties.push(prop);
      }
    }
    return properties;
  }
  
  console.log(all_properties(Array));
  

  //8 Write a JavaScript function to parse an URL.


  function parseURL(url) {
    const urlRegex = /^(?:(https?):\/\/)?((?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9])(?::(\d+))?((?:\/[^?#]*?)?(?:\?[^#]*?)?(?:#.*)?)?/;
    const match = urlRegex.exec(url);
  
    if (!match) {
      return null;
    }
  
    const parsedURL = {
      protocol: match[1] || 'http',
      hostname: match[2],
      port: match[3],
      pathname: match[4] || '/',
      search: match[5] || '',
      hash: match[6] || ''
    };
  
    return parsedURL;
  }
  
  const url = 'https://www.youtube.com/shorts/I1bZ7GBzbAE';
  const parsed = parseURL(url);
  console.log(parsed);


  //9  Write a JavaScript function to retrieve all the names of an object's own and inherited properties
  function getAllProperties(obj) {
    let properties = [];
    
    // Iterate over all properties, including inherited ones
    for (let prop in obj) {
        properties.push(prop);
    }
    
    return properties;
}

// Example usage
const parent = { inheritedProp: "I'm inherited" };
const child = Object.create(parent);
child.ownProp = "I'm own property";

console.log(getAllProperties(child)); // Output: ["ownProp", "inheritedProp"]



//10 Write a JavaScript function to retrieve all the values of an object's properties.
function getOwnPropertyValues(obj) {
  return Object.values(obj);
}

const obj = { name: "Wahome", age: 25, city: "Nakuru" };
console.log(getOwnPropertyValues(obj)); // Output: ["Wahome", 25, "Nakuru"]


//11   Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
function getAllKeyValuePairs(obj) {
  let keyValuePairs = [];
  
  for (let key in obj) {
      keyValuePairs.push([key, obj[key]]);
  }
  
  return keyValuePairs;
}

const parent = { inheritedProp: "I'm inherited" };
const child = Object.create(parent);
child.ownProp = "I'm own property";

console.log(getAllKeyValuePairs(child));


//12 Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys
function swapKeysAndValues(obj) {
  const swapped = {};
  
  for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
          swapped[obj[key]] = key;
      }
  }
  
  return swapped;
}

const obj = { name: "Wahome", age: "25", city: "Nakuru" };
console.log(swapKeysAndValues(obj));
// Output: { Wahome: "name", 25: "age", Nakuru: "city" }


//13  Write a JavaScript function to check whether an object contains a given property.

function hasOwnProp(obj, prop) {
  return obj.hasOwnProperty(prop);
}

// Example usage
const obj = { name: "Kevin", age: 18 };
console.log(hasOwnProp(obj, "name")); // Output: true
console.log(hasOwnProp(obj, "city")); // Output: false



