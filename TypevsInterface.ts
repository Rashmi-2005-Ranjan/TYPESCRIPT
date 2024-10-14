// 1. Use custom types when you need unions, intersections, or mapped types.
//    Use interfaces when defining object shapes or classes that adhere to a contract.

// 2. Interfaces can extend other interfaces to inherit their members.
//    Custom types can use unions and intersections for more complex type compositions.
/*
// Example with Type
type Stud = {
    name: string;
    age: number;
  };
  
  type StudAddr = {
    city: string;
    state: string;
  };
  
  // Combining types using intersection
  type Data = Stud & StudAddr;
  
  const bioData: Data = {
    name: "Vinod",
    age: 29,
    city: "Pune",
    state: "MH",
  };
  
  console.log(bioData); // Outputs: { name: 'Vinod', age: 29, city: 'Pune', state: 'MH' }
  */
  // Example with Interface
  interface Stud {
    name: string;
    age: number;
  }
  
  interface StudAddr {
    city: string;
    state: string;
  }
  
  // Extending interfaces
  interface Data extends Stud, StudAddr {}
  
  class BioData implements Data {
    constructor(
      public name: string,
      public age: number,
      public city: string,
      public state: string
    ) {}
  }
  
  const std1 = new BioData("Vinod", 29, "Pune", "MH");
  
  console.log(std1); // Outputs: BioData { name: 'Vinod', age: 29, city: 'Pune', state: 'MH' }
  
  // Note: Interfaces with the same name get merged (interface merging),
  // whereas types with the same name will result in a conflict.
  