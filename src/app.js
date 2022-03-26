//part2
function selectionOneFunction(element) {
    const selectionOne = document.querySelector("element")
    return selectionOne
  }
console.log(selectionOneFunction((".container light-theme")))  

//part3 
const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
  ]

  function calculateGPA (average,studentsGetScholarship){
    let overallGPA = 0
    for (const number of average.grades){
       overallGPA += number
    }
    const averageGPA = overallGPA / 4
    if (averageGPA > 80){
     const scholarshipStudent = { name: average.name, gradeAvg: averageGPA}
     studentsGetScholarship.push(scholarshipStudent)
    }

 return overallGPA
}

function studentsWhoQualify (students){
  const studentsGetScholarship = []
  for (const average of students){
    calculateGPA(average,studentsGetScholarship)

}
  return studentsGetScholarship
}
console.log(studentsWhoQualify(students))

//part4
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-theme");
  } 