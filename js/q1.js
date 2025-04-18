const employees = [
  {
      name: "Alan",
      examScores: []
  },
  {
      name: "Betty",
      examScores: []
  },
  {
      name: "Cindy",
      examScores: []
  },
  {
      name: "Dana",
      examScores: []
  },
  {
      name: "Ellen",
      examScores: []
  },
  {
      name: "Frank",
      examScores: []
  },
  {
      name: "Glenda",
      examScores: []
  },
  {
      name: "Hank",
      examScores: []
  }
];
// PART I - Populate the EXISTING array.  Do NOT create a new array.
// Overview
// In order to obtain certification, employees must pass an exam with a minimum score of 90 (90 or higher)
// History shows that exam scores are uniformly distributed between 50 and 100.
//
// Task
// Write code to populate the employee's exam scores.
// Notes:
//   For each employee, generate a random number between 50 and 100 (exam score)
//   Populate the employees score with the random number
//   Continue populating the employee scores until the employee earns a 90 or higher
//     (can be on the first attempt or may take multiple attempts)

// Example:
//   The result for Alan may look as follows (this is an example only, your results will vary):
//    {
//      name: "Alan",
//      examScores: [ 82, 65, 89, 71, 98 ]
//    },

const populateScores = () => {
  employees.forEach(employee => {
    for (let i = 0; i < 5; i++) {
      let score = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
      if (score < 90) {
        employee.examScores.push(score);
      } else {
        employee.examScores.push(score);
        break;
      }
    }
  })
}
populateScores();

// You could use the following to test the updated array:
// console.log(employees);

// PART II - Drop the lowest score from the EXISTING array.  Do NOT create a new array.
// Overview
// If the employee did not pass the exam on the first attempt, you want to drop the lowest score
// This is done to improve employee attempts statistics
//
// Task
// For each employee, check the number of attempts (scores)
// If the number of attempts is greater than one, drop the lowest score
// Note:
//   Optional:
//     You may create a generic function to determine the lowest score of an array
//     since you will need to do this again below
//
// Example:
//   Using the example for Alan from above, the updated result is below
//     (this is an example only, your results will vary):
//    {
//      name: "Alan",
//      examScores: [ 82, 89, 71, 98 ]
//    },

const findLowest = () => {
  employees.forEach(employee => {
    let lowest = employee.examScores.reduce((min, curr) => (curr < min ? curr : min))
    let index = employee.examScores.indexOf(lowest);
    if (index > -1 && employee.examScores.length > 1) {
      employee.examScores.splice(index, 1);
    }
  })
}
findLowest();

// You could use the following to test the updated array:
// console.log(employees);
// Note: If you are using the browser and need to expand the array to view the elements,
//       it will show the updated array (So, you can’t compare Part I to II).
//       In this case, show the output in the console (use node, e.g. node q1.js)

// PART III - Create a NEW Array with Summary Data / Use Array Functions
// Overview
// Use array functions to create a NEW ARRAY with summary data
// DO NOT use a traditional loop with indexes, forEach loop, or for-of loop
// DO NOT use a Math.min() and/or the Math.max functions (similar to the homework assignment)
//
// Task
// Create an array of objects, each object containing the following:
//  name
//  examScores (this is an array)
//  numberOfAttempts
//  passingScore (this is the high score)
//  avgScore
//  minScore

// Notes
//   - You must use array methods (map, reduce, filter)
//   - DO NOT write a traditional loop with indexes, forEach loop, or for-of loop
//   - DO NOT use a Math.min() and/or the Math.max functions (similar to the homework assignment)
//   - You may use functions (not required)

// Sample object for "Alan"
//  This is just an example, your values will vary depending on number of tests and test scores
//   Use Alan's scores from above
//    {
//      name: "Alan",
//      examScores: [ 82, 89, 71, 98 ],
//      numberOfTests: 4, 
//      passingScore: 98, **filter**
//      avgScore: 85, **map**
//      minScore: 71 reduce
//    },
const employeeDetails = employees.map(employee => ({
  name: employee.name,
  examScores: employee.examScores,
  numberOfTests: employee.examScores.length,
  passingScore: employee.examScores.filter(score => score >= 90).length > 0 
    ? employee.examScores.filter(score => score >= 90) 
    : 'Did not pass.',
  avgScore: employee.examScores.reduce((acc, curr) => acc + curr, 0) / employee.examScores.length,
  minScore: employee.examScores.reduce((min, curr) => (curr < min ? curr : min))
}))

// PART IV - Output the results / Custom Format
//  Output the summarized data to the console.  You must use the following format:
//  (this is not a single line console.log(yourArrayName))
//  Hint: Loop through the array
//
// Name: Alan
// Exam Scores: 82, 89, 71, 98
// Num. of tests: 4
// Passing Score: 98.  Avg Score: 85.  Minimum Score: 71
// *********************************************************
// ...
//
// Note:  Include the ********************************************************* after each employee

for(let i = 0; i < employeeDetails.length; i++) {
  console.log('Name:', employeeDetails[i].name);
  console.log('Exam Scores:', employeeDetails[i].examScores);
  console.log('Num. of tests:', employeeDetails[i].numberOfTests);
  console.log(`Passing Score: ${employeeDetails[i].passingScore} Avg Score: ${employeeDetails[i].avgScore} Minimum Score: ${employeeDetails[i].minScore}`);
  console.log('*********************************************************');
}