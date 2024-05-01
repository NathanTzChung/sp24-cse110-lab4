1. The number 3 will be printed since `i` was declared as a `var` type and the length of `prices` is 3.
2. The value discountedPrice stores (150) will be printed because it's declared as a `var` (still in function block scope) and there don't seem to be any other errors in betwen.
3. The *updated* value (150) of `finalPrice` will be printed since it is declared as a `var` and updated in the for loop.
4. The function should return a list containing the updated **values** of `finalPrice` (values are 50, 100, 150) since `finalPrice` is added to the `discounted` list at each loop iteration.
5. An error would occur because `i` is declared as a `let` type in the for block, so it wouldn't be callable again outside the for block.
6. An error would occur because `discountedPrice` is declared as `let` type in the for block.
7. The value of `finalPrice` (150) is printed since its value is updated in the for block, but is declared as a `let` in the `function` block (so it is still visible when being called again).
8. This function would return the values in the list `discounted` ([50, 100, 150])because, even though the variables are declared as `let`, `discounted` is still in its `function` **block** and gets properly updated throughout the function call (i.e. `discountedPrice` gets updated correctly in the for loop, which also updates `finalPrice` properly, and gets pushed into `discounted`).
9. Error at line 11 because `i` is a `let` type inside the for block.
10. THe value 3 is printed because `length` is assigned the value `prices.length` at the start of the function call as a `const` type (and `prices.length` has value 3).
11. Even though `discounted` is declared as a `const`, it can still be manipulated, so the values are still pushed into the list. Similarly, `discountedPrice` isn't reassigned to a new thing, so in each loop iteration, it's value is able to change. Thus, the list [50, 100, 150] is returned.
12. a. `student.name` </br>
    b. `student["Grad Year"]` </br>
    c. `student.greeting()` </br>
    d. `student["Favorite Teacher"].name` </br>
    e. `student.courseLoad[0]`
13. a. '32': because integers can be mapped to their string representation, so we get '3' + '2' (where + is a string concatenator) which concatenates to '32'. </br>
    b. 1: because `-` doesn't act on anything for strings, so the subtraction operation is used and the string is converted to a number. </br>
    c. 3: because null acts as zero when it is used with numbers, so 3 + null would be 3 + 0 = 3 in this case. </br>
    d. '3null': because '3' is a string, and `+` is also a string concatenator, so JS converts null to 'null' and concatenates the two values. </br>
    e. 4: because true is converted to its truth value (which is 1), and 1 + 3 = 4. </br>
    f. 0: because `+` is the unary plus operator which is used to try to convert the value into a number. In this case, it adds the truth value of false (which is 0) and null (whose value is empty, so 0). </br>
    g. '3undefined': because this is similar to part D where '3' is a string, so the `+` operator is used as concatenation. Thus, undefined is converted 'undefined' and we get '3' + 'undefined'. </br>
    h.  NaN: because we use the `-` operator. This is an arithmetic operator (unary negation) which also tries to get the number value. Undefined has no value (which is different from null), so when trying to add and subtract with undefined, you will get NaN since you are adding/subtracting that has no assigned value.
14. a. true: because the string is converted to a number (since '2' and 1 are different type, so JS converts the string to a number), and 2 > 1 is true. </br>
    b. false: Since '2' and '12' are both strings, JS will compare the characters. The first character in '2' is greater than the first character in '12' (2 > 1), so '2' < '12' is false. </br>
    c. true: because '2' is converted to a number, and 2 == 2 is true. </br>
    d. false: because `===` strictly checks '2' and 2 which are of different types. False is returned immediately. </br>
    e. false: because true is converted to 1, and 1 is not equal to 2. </br>
    f. true: Boolean(2) would return `true` for any values that aren't "empty" (i.e. 0, null, empty string, undefined, NaN). So, this is comparing true === true which is true.
15. The difference is that `==` is not strict. Specifically, it compares equality for things by converting them to their number equivalence. So, you can compare values of different types and get true as long as their number values are the same (eg. 0 and false). However, `===` is a strict comparator that cares about value type. It will compare things without type conversion, so if two things of different types are compared, it would return false.
16. (In part2-question16.js)
17. The result should be a return of [2, 4, 6]. To trace through my thought process, I start with the call to modifyArray and the arguments [1,2,3] and `doSomething`. In the function `modifyArray`, the for loop will run for 3 iterations before stopping (since the length of the array argument is 3). In each iteration, the return variable `newArr` is appended a value. Specifically, the appended value is the current array index's number times 2. This is because the line `newArr.push(callback(array[i]))` actually calls the function `doSomething` which is `num * 2`. In this case, `array[i]` is substituted in for `num`. The reason why `doSomething` is called is because `doSomething` is passed as the callback function. Thus, the first iteration, the value `1 * 2` is appended. Next iteration `2 * 2`, and the last iteration `3 * 2`. Finally, `newArr` is returned.
18. (In part2-question18.js)
19. The output is in the order `1 4 3 2` because 1 is printed immediately first. Even though printing 3 has a timeout of 0 seconds, it comes after printing 4 because setTimeout occurs at the next opportunity (so basically 0 seconds puts printing 3 at the top of the queue).