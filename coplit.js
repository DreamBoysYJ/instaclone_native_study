function studentReports(students) {
  // 남자 거른 배열 구하고
  const girlsArr = students.filter((student) => student.gender === "female");
  console.log(girlsArr);
  // grade 배열 >>> 평균 str으로
  // grades: [ 4.5, 3.5, 4 ] >>> 4로
  const test = girlsArr.map((girl) =>

    girl.grades = girl.grades.reduce((acc,cur) => acc + cur) 
   
  );
  console.log(test);
}

let studentList = [
  {
    name: "Anna",
    gender: "female",
    grades: [4.5, 3.5, 4],
  },
  {
    name: "Dennis",
    gender: "male",
    country: "Germany",
    grades: [5, 1.5, 4],
  },
  {
    name: "Martha",
    gender: "female",
    grades: [5, 4, 4, 3],
  },
  {
    name: "Brock",
    gender: "male",
    grades: [4, 3, 2],
  },
];

let output = studentReports(studentList);

console.log(output); // -->
[
  { name: "Anna", gender: "female", grades: 4 },
  { name: "Martha", gender: "female", grades: 4 },
];
