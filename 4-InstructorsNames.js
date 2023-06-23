// Kata 4 - Instructors Names

const instructorWithLongestName = (instructors) => {
  let longNameCheck = 0;
  let longestName = 0;

  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > longNameCheck) {
      longNameCheck = instructors[i].name.length;
      longestName = i;
    }
  }
  return instructors[longestName];
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);

// Expected output
// {name: "Jeremiah", course: "Web"}
// {name: "Domascus", course: "Web"}
