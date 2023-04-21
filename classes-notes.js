// Intro to JavaScript classes...
    // We capitalize and PascalCase class names
class Dog1 { // Dog is the name of the class
    constructor(name) { // The constructor() method will be invoked each time we create an instance of the dog class..we also only accept one argumuent, which is name. 
      this.name = name; // We use this to set the instance of the class, which is the name here
      this.behavior = 0; //We use the behavior property init to zero 
    }
  }
    // End of lesson 1, introduction to classes  
//================================================================================================================================================================================================
//Start of lesson 2: The constructor() method
class Surgeon {
    constructor(name, department) { // The constructor() method will be invoked each time we create an instance of the Surgeon class. 
      this.name = name;
      this.department = department;
    }
  }
    // Same as above but we are making a surgeon object with classes and assigning them a name and department..
// End of lesson 2: The constructor() method
//============================================================================================================================
// Start of lesosn 3: Instance 
    // Instances are objects that contain property names and methods, but with unique prop values.
    //Below is an example with Dog class
    class Dog2 {
        constructor(name) {
        this.name = name;
        this.behavior = 0;
        } 
    }
    
    const halley = new Dog2('Halley'); // Create new Dog instance
    //console.log(halley.name); // Log the name value saved to halley
    // Output: 'Halley'
        console.log('=============================')
        // End of example =========================
        
    class Surgeon2 {
        constructor(name, department) {
        this.name = name;
        this.department = department;
        }
    }
    const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
    const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
// End of lesson 3: Instances
//============================================================================================================================
// Start of Lesson 4: Methods
    // Below is an example of a Dog class woth name & behavior properties. We will add getters to bring it to life.

    class Dog3 {
        constructor(name) {
        this._name = name;
        this._behavior = 0;
        }
    
        get name() {
        return this._name;
        }
    
        get behavior() {
        return this._behavior;
        }
    
        incrementBehavior() {
        this._behavior++;
        }
    }
class Surgeon3 {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }
      
    get name() {
        return this._name;
    }
      
    get department(){
        return this._department;
    }
      
    get remainingVacationDays() {
        return this._remainingVacationDays;
    }
      
    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}      
const surgeonRomero2 = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson2 = new Surgeon('Ruth Jackson', 'Orthopedics');

    // End of the example ========================
// End of lesson 4: Methods
//================================================================================================================================================================================================
// Start of Lesson 5: Method Calls
// The code from example 4 will be used as reference.
class Dog4 {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
   
    get name() {
      return this._name;
    }
   
    get behavior() {
      return this._behavior;
    }   
   
    incrementBehavior() {
      this._behavior++;
    }
  }
   
  const halley2 = new Dog4('Halley');
    // Above we create the dog class, then create an instance and save it to a variable named Halley
    // I will create two new Dog instances and call the .incrementBehavior method on one of them.
    let nikko = new Dog4('Nikko'); // Create dog named Nikko
    nikko.incrementBehavior(); // Add 1 to nikko instance's behavior
    let bradford = new Dog4('Bradford'); // Create dog name Bradford
    console.log(nikko.behavior); // Logs 1 to the console
    console.log(bradford.behavior); // Logs 0 to the console

// In the example aboce I create two dog instances callled Nikko and Bradford. Nikko instance increments but Bradford's does not, which will be show upon calling the behavior method..
//End of example 5: Method Calls
//================================================================================================================================================================================================
// Start of exmaple 6: Inheritance I
class Cat1 {
    constructor(name, usesLitter) {
      this._name = name;
      this._usesLitter = usesLitter;
      this._behavior = 0;
    }
   
    get name() {
      return this._name;
    }
   
    get usesLitter() {
      return this._usesLitter;
    }
   
    get behavior() {
      return this._behavior;
    }  
   
    incrementBehavior() {
      this._behavior++;
    }
  }
// above is the example of a cat class for the doggy daycare example.  
/* 
- When multilpe classes share properties and methods they become canidates for inheritance. With inheritance there are parent classes
and multiple child classes. 

- Here is an example of a parent class called animal... 
*/
class Animal1 {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
   
    get name() {
      return this._name;
    }
   
    get behavior() {
      return this._behavior;
    }   
   
    incrementBehavior() {
      this._behavior++;
    }
  }
// In the above examples, the Animal class contains the properties and methods that the Cat and Dog classes share, such as (name, behavior, and .incrementBehavior()).
// End of the lesson: Inheritance I
//================================================================================================================================
// start of lesson 7: Inheritance II
class Animal2 {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
   
    get name() {
      return this._name;
    }
   
    get behavior() {
      return this._behavior;
    }   
   
    incrementBehavior() {
      this._behavior++;
    }
  }   
// the code below will show that the cat class is inheriting info from the Animal class...
  class Cat2 {
    constructor(name, usesLitter) {
      this._name = name;
      this._usesLitter = usesLitter;
      this._behavior = 0;
    }
   
    get name() {
      return this._name;
    }
   
    get behavior() {
      return this._behavior;
    }
   
    get usesLitter() {
      return this._usesLitter;
    }
   
    incrementBehavior() {
      this._behavior++;
    }
  }
// end of lesson 7 Inheritence II
//================================================================================================================================
// Start of lessson 8: Static methods
  /*
    - There will be times when you want a class to have methods that aren't avaliable in individual instances.
    but can be called directly from the class.

    - The Date class is a prime example of this. Date.now() will return the current date directly form the class.

    - Below we will create a static keyword to create a static method called 
  */
    class Animal3 {
        constructor(name) {
          this._name = name;
          this._behavior = 0;
        }
       
        static generateName() {
          const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
          const randomNumber = Math.floor(Math.random()*5);
          return names[randomNumber];
        }
      }      

    /* Above we create a static method called .generateName() that returns a random name when called 
        because of the static keyword, .generateName() can only be accessed by appending it to the 
        Animal class.
    
    - Below the .generateName() method is called:
    */
   console.log(Animal3.generateName()); // This will return a name in the console.
// The .generate() name method can not be accessed from the Animal class or its subclasses.
    /*  const tyson = new Animal3('Tyson'); 
        tyson.generateName(); // TypeError
    */