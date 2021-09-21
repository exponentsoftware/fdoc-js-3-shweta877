// Destruction(student);

//////////////////////////////  1.B   //////////////////////////////

//  Write a function called convertArrayToObject which can convert the array to a structured object.

// 	const students = [
//     ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//     ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
//   ]

// console.log(convertArrayToObject(students))
// [
//   {
//     name: 'David',
//     skills: ['HTM','CSS','JS','React'],
//     scores: [98,85,90,95]
//   },
//   {
//     name: 'John',
//     skills: ['HTM','CSS','JS','React'],
//     scores: [85, 80,85,80]
//   }
// ]

const students = [
    ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
    ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
  ];
  
  convertArrayToObject = (students) => {
    let obj_set = [];
  
    for (let value of students) {
      obj_set.push(
        Object.assign({ name: value[0], skills: value[1], scores: value[2] })
      );
    }
    return obj_set;
  };