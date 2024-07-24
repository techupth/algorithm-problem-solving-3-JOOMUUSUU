function sortStudentsByScore(students) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < students.length; i++) {
    for (let x = 0; x < students.length - 1; x++) {
      if (students[x].score < students[x + 1].score) {
        const temp = students[x];
        students[x] = students[x + 1];
        students[x + 1] = temp;
      }
    }
  }
  return students;
}

console.log(
  sortStudentsByScore([
    { id: "S001", name: "Anan", score: 85 },
    { id: "S002", name: "Boon", score: 92 },
    { id: "S003", name: "Chai", score: 78 },
    { id: "S004", name: "Dao", score: 95 },
    { id: "S005", name: "Ek", score: 88 },
    { id: "S006", name: "Fah", score: 80 },
    { id: "S007", name: "Joom", score: 81 },
  ])
);
