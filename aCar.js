// Question ___________ 79


// Constructing an object representing a car
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2022
  };
  
  // Accessing the model property of the car
  console.log("Car Model:", car.model); // Output: Car Model: Camry

  
  // Question ____________ 80


  // Existing car object
let Car = {
    make: "Toyota",
    model: "Camry",
    year: 2022
  };
  
  // Adding a new property named color
  Car.color = "black";
  
  // Updating the year property
  Car.year = 2022;
  
  // Displaying the updated car object
  console.log("Updated Car Object:", Car);


  // Question ___________ 81



  function displayObjectProperties(obj) {
  for (let property in obj) {
    console.log(property + ": " + obj[property]);
  }
}

// Example object
let person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

// Calling the function to display properties and values of the object
displayObjectProperties(person);
