const digits = [1, 2, 3, 4, 6, 7, 8];

digits.unshift(0);
digits.push(9);
digits.splice(5, 0, 5); // at index 5, I remove 0 element and I insert number 5

let squares = [];
digits.forEach(function(digit) {
  squares.push(digit * digit);
});

squares = digits.map(function(digit) {
  return digit * digit;
});

function printSquare(n) {
  console.log(n);
}

// digits.forEach(printSquare);

// console.log(squares);

const cities = ["berlin", "paris", "madrid"];

const uppercaseCities = cities.map(function(city) {
  return city.toUpperCase();
});

// console.log(uppercaseCities);

let garage = [
  {
    make: "Toyota",
    model: "Prius",
    year: 2004,
    miles: 140000
  },
  {
    make: "BMW",
    model: "3",
    year: 2010,
    miles: 90000
  },
  {
    make: "Audi",
    model: "A4",
    year: 2010,
    miles: 75000
  }
];

// create an array of strings out of an array of objects
const brands = garage.map(function(car) {
  return car.make;
});

garage = garage.map(function(car) {
  // add kilometers
  return car;
});

console.log(garage);
