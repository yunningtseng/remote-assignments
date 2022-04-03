// create object
function calculate(args) {
  let result;
  if (args.op === "+") {
    result = args.n1 + args.n2;
  } else if (args.op === "-") {
    result = args.n1 - args.n2;
  } else {
    result = "Not supported";
  }
  return result;
}
// way one
let arg1 = { n1: 1, n2: 2, op: "+" };
calculate(arg1);
console.log(calculate(arg1)); // 3

// way two
let arg2 = {};
arg2["n1"] = 1;
arg2.n2 = 2;
arg2.op = "-";
console.log(calculate(arg2)); // -1
