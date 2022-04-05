function CalculateValleys(string) {
  let countOfValleys = 0;
  let currentSeaLevel = 0;
  let prevSeaLevel = 0;
  for (let i of string) {
    console.log("Each value", i);
    prevSeaLevel = currentSeaLevel;
    if (i === "U") {
      currentSeaLevel += 1;
    } else {
      currentSeaLevel -= 1;
    }
    if (prevSeaLevel < 0 && currentSeaLevel === 0) {
      countOfValleys += 1;
    }
    console.log("count of valleys:", countOfValleys);
  }
  return countOfValleys;
}

const result = CalculateValleys("UUDDUUDDUUDDDDDDUUDDUUUUDDDDUUUU");
console.log("The number of valley's are:", result);
