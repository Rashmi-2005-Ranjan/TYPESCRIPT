class Person {
    private _name: string;
    private _age: number;
  
    constructor(name: string, age: number) {
      this._name = name;
      this._age = age;
    }
  
    // Getter for name
    get name(): string {
      return this._name;
    }
  
    // Setter for name
    set name(newName: string) {
      if (newName.length > 0) {
        this._name = newName;
      } else {
        throw new Error("Name Can't Be Empty")
      }
    }
  
    // Getter for age
    get age(): number {
      return this._age;
    }
  
    // Setter for age
    set age(newAge: number) {
      if (newAge > 0 && newAge<150) {
        this._age = newAge;
      } else {
        throw new Error("Age is Not Valid");
      }
    }
  }
  
  const prson1 = new Person("Rashmi", 19);
  
  console.log(prson1.name)
  console.log(prson1.age)

  // prson1.age=512;
  // console.log(prson1.age) //Throwing Error
 
  // prson1.name="";
  // console.log(prson1.name) //Throwing Error