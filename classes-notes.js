// Intro to JavaScript classes...
    // We capitalize and PascalCase class names
class Dog { // Dog is the name of the class
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
    class Dog {
        constructor(name) {
        this.name = name;
        this.behavior = 0;
        } 
    }
    
    const halley = new Dog('Halley'); // Create new Dog instance
    //console.log(halley.name); // Log the name value saved to halley
    // Output: 'Halley'
        console.log('=============================')
        // End of example =========================
        
    class Surgeon {
        constructor(name, department) {
        this.name = name;
        this.department = department;
        }
    }
    const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
    
    const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
// End of lesson 3: Instances
//============================================================================================================================