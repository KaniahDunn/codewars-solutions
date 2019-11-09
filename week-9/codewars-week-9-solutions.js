//Opposite Number
// Very simple, given a number, find its opposite.
//
// Examples:
//
// 1: -1
// 14: -14
// -34: 34
var opposite = number => -(number)


// Grasshopper - Basic Function Fixer
// Fix the function
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.
//
// Can you help me fix the function?
function addFive(num) {
  var total = num + 5
  return total
}

// Can we divide it?
// Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.
//
// A few cases:
//
//
// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false
//
// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true
//
// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

function isDivideBy(number, a, b) {
  // good luck
  if(number % a ===0 && number % b === 0 ){
  return true
}else {
  return false
  }
  }


// A (no more) bugs trilogy: Episode 3 - Make a Player

// Pac succesfully passed the first & second test.
// He just received the last message from the Academy,
//
// This is your last test, if you pass, your application will be accepted. You have 45 minutes.
//
// Good Luck
//
// Pac has to create a Football Player object with the following attributes :
//
// name      -> (string)
// position  -> (string)
// age       -> (int)
// dribbling -> (int)
// pass      -> (int)
// shoot     -> (int)

  function Player(name, position, age, dribbling, pass, shoot) {
    // Have fun!
    this.name = name
    this.position = position
    this.age = age
    this.dribbling = dribbling
    this.pass = pass
    this.shoot = shoot
  }


  // Beginner Series #3 Sum of Numbers
  // Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.
  //
  // Note: a and b are not ordered!
  //
  // Examples
  // GetSum(1, 0) == 1   // 1 + 0 = 1
  // GetSum(1, 2) == 3   // 1 + 2 = 3
  // GetSum(0, 1) == 1   // 0 + 1 = 1
  // GetSum(1, 1) == 1   // 1 Since both are same
  // GetSum(-1, 0) == -1 // -1 + 0 = -1
  // GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2


  function GetSum(a,b){
  debugger;
  var sum = 0;
  if(a === b){
    return a;
  } else if(a < b){
    for(a; a <= b; a++){
      sum += a;
    }
  } else if(b < a){
    for(b; b <= a; b++){
      sum += b;
    }
  }
  return sum;
}

// Factory Functions #1 - Creating profile for people

// Overview
// In Javascript, there are basically two types of constructors - those in classes and factory functions/constructors. A factory function (otherwise known as a factory constructor) is a function that returns an object literal. This means that lots of similar objects can be easily created and instantiated without ever using the new keyword. According to this article, there are a number of benefits of using factory functions over using class syntax:
//
// Instantiating and object from a class requires the new keyword to be used; in contrast, with factory functions, the new keyword is not required at all
// If a class constructor is called without the new keyword (e.g. Animal() instead of new Animal()), the global namespace will be polluted. No such danger exists when using factory functions
// One of the conventions when using class syntax is that the name of the class is always in UpperCamelCase regardless of the programming language you are using. By using factory functions in Javascript instead, the programmer no longer feels the obligation to follow the awkward conventions of class syntax (i.e. the programmer will feel free to use lowerCamelCase in Javascript to name his/her factory constructor)
// Factory functions are much more flexible tha class constructors in general
// Factory functions (and other Javascript OOP methods that do not include classes and classical inheritance) allow inheritance of an object from multiple ancestors while a class can only inherit from one superclass
// There's also the argument that by overusing classical inheritance and creating multiple layers of inheritance (for example, class Dachshund extends Dog, where class Dog extends Animal), if a bug occurs, it has to be fixed everywhere because for example after you fixed the superclass you will probably also have to fix the subclass as the behaviour of super may have already changed after the bug fix.
//
// However, that article aside, I do not agree with all of his viewpoints, at least not at this stage, because I personally find class syntax much more readable and easy to understand and at this stage (of creating only very small programs with Javascript) I have not yet run into any of the problems he has mentioned yet.
//
// However, who knows which one is better (classes or factory functions) if he/she hasn't tried both implementations? Therefore, in this Kata, you will be asked to create a basic factory function.
//
// Task
// Define a factory function person (yes, all lowercase letters) which accepts the following parameters in the following order:
//
// firstName
// lastName
// age
// gender
// employed
// occupation
// married
// The names of the object's keys should be identical to the names of the parameters mentioned above.
//
// The object should (then) also have the following methods:
//
// sayName - this should return the full name of the person (e.g. {firstName: "John", lastName: "Doe"} => "John Doe" // when the sayName() method is called)
// introduce - this should return a string of the following format: "Hello, my name is FULL_NAME. I am AGE years old. I am a GENDER."
// IMPORTANT: For the


function person(firstName, lastName, age, gender, employed, occupation, married) {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    gender: gender,
    employed: employed,
    occupation: occupation,
    married: married,
    sayName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
    introduce: function () {
      return `Hello, my name is ${this.sayName()}.  I am ${this.age} years old.  I am a ${this.gender}.`;
    }
  };
}

/*Factory Functions #2 - Inheritance and Object Composition
Overview
In the previous Kata of this series, we examined a few of the many benefits and advantages of using factory functions for object construction and instantiation instead of using classes and its related features (e.g. classical inheritance). We also (hopefully) covered the one major reason for using factory functions over using object constructors - since any ordinary function in Javascript can return an object literal, why bother using a constructor, especially seeing that object constructors give us way less freedom in object instantiation than a regular function?

So you may ask - how exactly is inheritance achieved by using factory functions? Actually, inheritance in factory functions is very straightforward - you just have to instantiate an object using another factory function and then modify it using the current function before returning the result. Below is a (pseudocode) example.

function a(v1) {
  // Our "parent" factory constructor
  return {
    p1: v1
  };
}

function b(v2, v3) {
  // Our "child" factory constructor
  var obj = a("constructorDefault");
  obj.p2 = v2;
  obj.p3 = v3;
  return obj;
}
Preloaded
Preloaded is a function person:

function person(firstName, lastName, age, gender, employed, occupation, married) {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    gender: gender,
    employed: employed,
    occupation: occupation,
    married: married,
    sayName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
    introduce: function () {
      return `Hello, my name is ${this.sayName()}.  I am ${this.age} years old.  I am a ${this.gender}.`;
    }
  };
}
Task
Define a function constructionWorker which "inherits" from the person function as demonstrated in the Overview and accepts the following parameters in the following order: firstName, lastName, age, gender, married, boss. The keys of the object returned should be identical to the name of the parameters mentioned above. Apart from that, a construction worker is always employed so employed should be set to true. Their occupation is also naturally a "construction worker".

On top of all that, a constructionWorker should have a method sayBossName which returns a string of the following format: "My boss is called BOSS_NAME and is a very nice person!" where BOSS_NAME is the name of the boss of said construction worker.*/


function constructionWorker(firstName, lastName, age, gender, married, boss) {
  var w = person(firstName, lastName, age, gender, true, 'construction worker', married);
  w.boss = boss;
  w.sayBossName = function() {
    return `My boss is called ${this.boss} and is a very nice person!`;
  };
  return w;
}
