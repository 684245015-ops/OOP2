let students: [string, number][] = [
    ["Alice", 95],
    ["Bob", 82],
    ["Charlie", 76],
    ["David", 60],
    ["Emma", 45]
];

for (let student of students) {
    let name: string = student[0];
    let score: number = student[1];
    let grade: string;

    if (score >= 80) {
        grade = "A";
    } else if (score >= 70) {
        grade = "B";
    } else if (score >= 60) {
        grade = "C";
    } else if (score >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    console.log(`${name} received ${score} and grade ${grade}`);
}