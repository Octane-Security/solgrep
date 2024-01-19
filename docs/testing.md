# Testing
This guide will show you how to test in this repository.
### Step 1: Access the /tests directory
Artifacts are used to manage testing resources and are stored in the /tests directory. 

### Step 2: Create a new test
Create a new test by creating a new file in the /tests directory. The name of the file should be the name of the test. For example, if you are testing solidity.ts, the name of the test should be test.solidity.ts

### Step 3: Running the test
To run the test, run the following command:
```
ts-node test.solidity.ts
```
Use console logs in your test to see the results of the test. If you do not have ts-node installed, run the following command:
```
npm install -g ts-node
```