# Example: Immutable Strings
This is an example for this lesson. You are encouraged to play around with it, run and change the code, and learn how it works. When you are done, click continue to go to the next problem.

Main

# Example: String Concatenation
This is an example for this lesson. You are encouraged to play around with it, run and change the code, and learn how it works. When you are done, click continue to go to the next problem.

StringConcatenation

# Example: Rectangle Dimensions
This is an example for this lesson. You are encouraged to play around with it, run and change the code, and learn how it works. When you are done, click continue to go to the next problem.

Rectangle & RectangleTester

# Example: Printing Equations
This is an example for this lesson. You are encouraged to play around with it, run and change the code, and learn how it works. When you are done, click continue to go to the next problem.

Calculator & CalculatorTester

# Problem 1: Pretty Printing Operations
Let’s revisit the calculator you implemented in a previous lesson.

The `Calculator` class has been implemented a bit differently in this lesson. The last time you implemented the `Calculator` class, its methods were void. Check out the class to understand it.

Modify the `main` method. Ask for two doubles. Then
print the sum, difference, product, and quotient. This time, you will have to call each method and store the result. The equation will be printed from `main` rather than from `Calculator`.

You should use a single print statement for each equation. Use `String` concatenation to form the equations. Be sure to add the spaces around the operators to ensure the output is formatted neatly.

For example, your output should look like this
```
Enter two doubles
3.4
1.6
3.4 + 1.6 = 5.0
3.4 - 1.6 = 1.7999999999999998
3.4 * 1.6 = 5.44
3.4 / 1.6 = 2.125
```
**Note**: Wondering why you get really long decimal numbers sometimes? That’s because the computer cannot actually represent all decimal numbers accurately. The approximations cause rounding errors when you use the numbers in calculations. This is called a “floating point error”.