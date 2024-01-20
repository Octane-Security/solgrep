import { Contract, SourceUnit } from "../src/solidity";

const path = require('path');

// Testing subcall logic for imported contracts
let sourceUnit: SourceUnit = new SourceUnit();
sourceUnit.fromFile(path.join(__dirname, '../tests/artifacts/baby_bank_repo/contracts/banking.sol'));
let contract: Contract | undefined = sourceUnit.getContracts().find(contract => contract.name === 'banking');
if (!contract) {
  throw new Error("Contract 'banking' not found");
}

let functions = contract.getFunctions();
const withdrawfn = functions.find(func => func.name === 'withdraw')
if (!withdrawfn) {
  throw new Error("Function 'withdraw' not found");
}

const innerFunctions = withdrawfn.getInnerFunctionCalls(5, true);
console.log(`${withdrawfn.name} has ${innerFunctions.length} inner function calls:`);
for (let innerFunc of innerFunctions) {
  console.log(sourceUnit.getRawFunctionString(innerFunc))
}
