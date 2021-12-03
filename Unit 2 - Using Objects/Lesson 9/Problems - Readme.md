# Example: Creating Integers
Here is the documentation for Integer:
[https://docs.oracle.com/javase/7/docs/api/index.html?java/lang/Integer.html](https://docs.oracle.com/javase/7/docs/api/index.html?java/lang/Integer.html)

IntegerExamples

# Example: Using Doubles
Here is the documentation for Double:
[https://docs.oracle.com/javase/7/docs/api/index.html?java/lang/Double.html](https://docs.oracle.com/javase/7/docs/api/index.html?java/lang/Double.html)

DoubleExamples

# Example: Autoboxing Example
This is an example for this lesson. You are encouraged to play around with it, run and change the code, and learn how it works. When you are done, click continue to go to the next problem.

Lifts & LiftTester

# Problem 1 - Order Up!5 points
This program is the beginning of an automated order machine. You are programming the piece that gets the number of the order from the label sent to you by the ordering machine.

The ordering machine is simulated with user input. It sends a full label, such as “3. Veggie Burger”.

## Fill in the missing code
Your task is to get the number out of the string. To do this, you need to isolate the number by using `substring`. Then use `Integer.valueOf`, a static method of `Integer` that takes a `String` and returns the integer value contained in the `String`.

The final program should look something like this
```
1. Hamburger
2. Cheeseburger
3. Veggie Burger
4. Nachos
5. Hot Dog

Enter label: 
5. Hot Dog
Customer ordered number 5
```