// Kata 15 - Organizing Instructors

const organizeInstructors = (instructors) => {
  const organized = {};

  // Loop over the array of instructors
  for (const instructor of instructors) {

    // Destructure each instructor so we can access their specific properties
    const { name, course } = instructor;

    //  Note: The negation `!` operator has higher precedence than the `in` operator.
    //        Placing the expression `(course in organized)` within parentheses lets us evaluate the expression as a whole
    //        and then the `!` is used to negate the result.
    //
    // If the course doesn't exist in the `organized` object, create it and add the instructor name
    if (!(course in organized)) {
      organized[course] = [name];
    }

    // If the course already exists,
    if (course in organized

      // and the instructor name doesn't already exist in the array for that course,
      && !organized[course].includes(name)) {

      // then add the instructor name for that course
      organized[course].push(name);
    }
  }

  return organized;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

// Expected output
// {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }
// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
// }