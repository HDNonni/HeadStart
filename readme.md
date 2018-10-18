Using HeadStart JavaScript to increase understanding of javaScript


Steps
 * user starts game 
 *      game pieces are places at random locatins on a grid(math.random?)
 * game begins  
 *      prompt for guess
 *      check if hit miss or sunk (if statement)
 * game finishes
 *      user gets a rating based on how many guesses
 * 
 * problems
 how to represent ships on a grid ( in 3 out of 7 cells)
 get user input prompt vs input number 0-6
 display output , alert vs ???


 pseudoCode
 declare 3 variables to hold the location of each cell of the ship
 loc1
 loc2 
 loc3
 variable to hold user guess
 varible to hold hits = 0
 variabel to hold guesses = 0
 variable to track whether or not ship sunk = false

 the logic 
 loop while ship is not sunk
 get users guess
 compare user inout to valid input values
 IF user guess is invalid
  tell to enter valid #
ELSE add one to guesses
    add one to # of hits
    IF number hits ==3
    set sank to true
    tell user You sank my battleship

end if
    if
    else
    loop

answer the who am I question

I get passed into a function.: argument
I send values back to the calling code.:return
I’m the all important keyword.:variable X should be function
I’m what receives arguments.: functions X should be parameters
It really means ‘make a copy’.:pass by value
I’m everywhere.:global variable
Another phrase for invoking a function.: function call
Example of a function attached to an object. Math.random
alert and prompt are examples.:built in functions
What functions are great for.:code resuse
Where I can be seen.:scope
I’m around when my function is :parameter X local variable

ACROSS
4. A parameter acts like a __variable_______ in the body of a
function.
6. JavaScript uses _PASS BY VALUE_______ when passing arguments
to functions.
10. You can declare your functions _ANYWHERE_________
in your JavaScript file.
11. What gets returned from a function without
a return statement. undefined
13. Local variables disappear when the
__function_______ returns.
16. If you forget to declare your locals, they’ll
be treated like ___globals_____.
17. A local variable can __SHADOW________ a global
variable.
DOWN
1. A variable with global __scope______ is visible everywhere.
2. Use functions so you can ___reuse____ code over and over
again.
3. The variables that arguments land in when they get
passed to functions. parameters
5. To get a value back from a function, use the ____return____
statement.
7. What gets passed to functions. arguments
8. When you reload your page, all your ___variables_______ get
re-initialized.
9. _Tracing_______ through your code means following the
execution line by line.
12. Watson looked at the bank heist code in Sherlock’s
___email___ on his phone.
14. It’s better to use __local______ variables whenever you
can.
15. Extra arguments to a function are __IGNORED________.