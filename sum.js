const sum = (num1,num2) => num1 + num2;

// console.log(process.argv`${[2][3]}`)

const s1 = process.argv[2]

const s2 = process.argv[3];

console.log(sum(+s1,+s2));
