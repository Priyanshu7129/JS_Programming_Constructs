let money = 100, goal = 200, bets = 0, wins = 0;
while (money > 0 && money < goal) {
    bets++;
    if (Math.random() < 0.5) {
        money++; wins++;
    } else {
        money--;
    }
}
console.log(`Final money: ${money}`);
console.log(`Total bets: ${bets}`);
console.log(`Wins: ${wins}`);
