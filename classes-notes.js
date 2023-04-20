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
// Start of Lesson 4: Methods
    // Below is an example of a Dog class woth name & behavior properties. We will add getters to bring it to life.

    class Dog {
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
    class Surgeon {
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