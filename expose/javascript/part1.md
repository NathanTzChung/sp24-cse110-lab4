1. values added: 20
2. final result: 20
3. values added: 20
4. Error because `let result = 0;` is declared and assigned within the `if` block scope, so it can't be accessed outside the block scope (i.e. in line 13).
5. Error because `const` can't be reassigned, so doing `result = num1 + num2` after assigning 0 to `result` would not work.
6. Error because of the same reasoning as part 4. Specifically, `const` is also locked by block scoping, so it can't be accessed outside of the `if` block.