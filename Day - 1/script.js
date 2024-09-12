let ballance = 2400;
let percent = 0.068;
let year = 1;

while (year <= 12) {
  console.log("year: " + year + " you will have " + ballance)
  let addin = ballance * percent; 
  ballance = ballance + addin + 2400;
  year++;
}