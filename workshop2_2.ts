let score: number = 65;
let grade: string;
if (score >=85 ){
    grade = "A";
}
else if (score >=70 ){
    grade = "B";
}
else if (score >=60 ){
    grade = "C";
}
else if (score >=50 ){
    grade = "D";
}
else if (score >=50 ){
    grade = "F";
}
else{
    grade = "Error: The score must be between 0 and 100";
}
console.log("score %d grade %s",score,grade);

