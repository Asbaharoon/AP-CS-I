# Problem 1 - Randomizer Class
In this exercise, we are going to create a static class `Randomizer` that will allow users to get random integer values from the method `nextInt()` and `nextInt(int min, int max)`.

Remember that we can get random integers using the formula `int randInteger = (int)(Math.random() * (range + 1) + startingNum)`.

`nextInt()` should return a random value from 1 - 10, and `nextInt(int min, int max)` should return a random value from `min` to `max`. For instance, if min is 3 and max is 12, then the range of numbers should be from 3 - 12, including 3 and 12.


# Problem 2 - Rock, Paper, Scissors!

In this problem, you’ll play a simple rock, paper, scissors
game. First, you’ll ask the user to pick rock, paper, or
scissors.

Then, you’ll have the computer randomly choose one of the
options. You should use the Randomizer class that you created in the last exercise to help the computer make a choice.

After that, print out the winner!

Your game should loop until the user hits enter without making a selection, at which point it should exit.

Note: You’ll need to implement a method called
`String getWinner(String user, String computer)` that determines whether the user or computer won the game, and return the correct winner!

Here is a sample run of the program.

`Enter your choice (rock, paper, or scissors): `
`rock`
`User: rock`
`Computer: rock`
`Tie`
`Enter your choice (rock, paper, or scissors):`
`paper`
`User: paper`
`Computer: rock`
`User wins!`
`Enter your choice (rock, paper, or scissors):`
`Thanks for playing!`