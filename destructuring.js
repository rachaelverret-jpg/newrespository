//Object Destructuring 1

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

//Object Destructuring 2
// {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//Object Destructing 3
getUserData({firstName: "Melissa"})
// Your name is Melissa and you like green

getUserData({})
// Your name is undefined and you like green

//Array Destructuring 1
console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

//Array destructruing 2
console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); // "whiskers on kittens"
console.log(aFewOfMyFavoriteThings);
// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

//Array Destructuring 3

console.log(numbers) // [10,30,20]

//ES5 Assigning Variables to Object Properties

/* Write an ES2015 Version */

const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  const {a,b} = obj.numbers

  //ES5 Array Swap
  var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

//ES2015 One-Line Array Swap with Destructuring
[arr[0], arr[1]] = [arr[1], arr[0]]

//raceResults
raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

// {first: "Tom", second: "Margaret", third: "Allison", rest: ["David", "Pierre"]}

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})