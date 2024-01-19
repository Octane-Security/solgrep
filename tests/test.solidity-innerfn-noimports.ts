import { FunctionDefinition } from "@solidity-parser/parser/dist/src/ast-types";
import { SourceUnit } from "../src/solidity";

const path = require('path');

// Fetching test file
let sourceUnit: SourceUnit = new SourceUnit();
sourceUnit.fromFile(path.join(__dirname, '../tests/artifacts/baby_bank_repo/contracts/baby_bank.sol'));

// Fetching baby_bank contract
let contract = sourceUnit.getContracts().find(contract => contract.name === 'baby_bank');
if (!contract) {
  throw new Error("Contract 'baby_bank' not found");
}

// Testing subcall logic
let functions = contract.getFunctions();
for (let func of functions) {
  const innerFunctions: FunctionDefinition[] = func.getInnerFunctionCalls(2, false) as any;
  console.log(`${func.name} has ${innerFunctions.length} inner function calls:`);
  for (let innerFunc of innerFunctions) {
    console.log(`\t${innerFunc.name}\n`);
    // print the code of the inner function
    console.log(sourceUnit.getRawFunctionString(innerFunc))
  }
}


