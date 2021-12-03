Distance Conversions5 points
# Problem 1 - Implement the class Distance.

This class has one instance variable, a double called miles. The class has methods that convert the miles into different units.

It should have the following methods

- public Distance(double startMiles) - the constructor; initializes miles
- public double toKilometers() - converts the miles to kilometers. To convert to kilometers, divide miles by 0.62137
- public double toYards() - converts miles to yards. To convert to yards, multiply miles by 1760.
- public double toFeet() - converts miles to feet. To convert to feet, muliply miles by 5280.
- public double getMiles() - returns the value of miles

## Main Method
To test your class, create three Distance objects in main. One represents the distance between Karel and school, Karel and the park, and Karel and his best friend.

Karel lives 5 miles from school. Karel lives 10 miles from the park. Karel lives 12 miles from his best friend.

Your program should use the methods from Distance to print the number of

- yards Karel lives from school
- kilometers Karel lives from the park
- feet Karel lives from his best friend

# Problem 2 - Food App Demo

You have been hired by your favorite restaurant to create a food nutrition app for their customers to use.  Before you get too far, the owner wants you to create a quick prototype.

Your app should output a food name and the number of calories, then ask the customer how many they want. You need to ask them for 3 menu items. Once they tell you the quantity for the three menu items, you will output the meal’s total calories.

Behind the scenes, you are going to create a Food class. Your Food class should use name and calories in the constructor (in that order!). You should create getters and setters for these variables. You also need a toString method that will be used in the line before you ask for the quantity.

In addition to the Food class, you will have a FoodRunner class where you will have your main method. In here, you will create your three foods and ask for the quantities. After that, you can use the quantities to calculate and output the total.

Sample output:
`
Hamburgers have 600 calories.
How many would you like?
2

French Fries have 350 calories.
How many would you like?
1

Coke have 200 calories.
How many would you like?
2

Your meal will have a total of 1950 calories
`