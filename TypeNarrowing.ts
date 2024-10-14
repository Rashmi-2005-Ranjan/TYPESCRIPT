// A typeof guard in TypeScript lets you narrow down the type of a variable 
// based on its runtime value. Type narrowing allows you to write type-safe code 
// by ensuring you only operate on the correct type under certain circumstances. 
// This is particularly useful with union types and generic types.

const favHobbies = (hobby: string | string[]) => {
    // Check if the hobby is an array
    if (typeof hobby === "object" && Array.isArray(hobby)) {
      // If hobby is an array, map over it
      return hobby.map((item) => {
        console.log(item);
        // You can return something if needed or process each item
      });
    } else {
      // If hobby is a string, just log it
      console.log(hobby);
    }
  };
  
  // Examples of using favHobbies function
  favHobbies("coding");           // Outputs: coding
  favHobbies(["coding", "games"]); // Outputs: coding, games (each on a new line)
  