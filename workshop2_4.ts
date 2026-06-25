const scores: number[] = [75, 85, 95, 64, 35];
let totalScore = 0;
let testNo = 1;


for (const score of scores) {
    console.log(`Test ${testNo} Score: ${score}`);
    totalScore += score;
    testNo++;
}


console.log(`Total Score: ${totalScore}`);
console.log(`Average Score: ${totalScore / scores.length}`);
