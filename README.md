## Purpose of this repository
This repository has been created for a group assignment in Tampere University. The aim is to create unit tests for the 10 most critical functions. The source code for testing has been cloned from a provided public repository:
https://github.com/otula/COMP.SE.200-2024-2025-1.git

## Repository contents
The repository contains the source code, unit tests for some of the source code, `package.json`, `package-lock.json`
and LICENSE file.

Source code folder contains a separate license file that must **NOT** be removed under any circumstances!
Removing this license file directly violates terms and conditions of the software under testing.
Individuals who remove or modify the license file will also carry the consequences.

## Testing environment
Unit tests use Jest framework

## Running the unit tests
Run the tests locally
```
npm test
```

Run a specific test file in __test__ folder
```
npm test -- the_test_file.test.js
```

Run the tests locally with a coverage report
```
npm run test:coverage
```

## Coveralls
Link to Coveralls which offers coverage raports of the unit tests pushed in GitHub:
https://coveralls.io/repos/github/campuuuu/testing-assignment/badge.svg?branch=main(Coverage Status)!:https://coveralls.io/github/campuuuu/testing-assignment?branch=main