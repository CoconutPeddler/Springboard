console.log("timer try 2")

// Countdown Function Exercise

function countDown(number) {
    let timerVariable = setInterval(function(){     // anonymous function held as a variable 
        number--;                                   // anonymous function (single use) - count down by one
        if (number <= 0) {
            clearInterval(timerVariable);           // stops the delay from running endlessly into the void using the variable
            console.log("Done!");
        }
        else {
            console.log("countdown number is: ", number);                    // prints the actual number
        }
    },1000)                                         // delay at 1000 ms = 1 second
}

// Calling the countDown function
countDown(4);

// Random Game Function Exercise

function randomGame() {
    let num;                                                    // creates a local empty variable
    let times = 0;                                              // establishes the times run so far is 0. 0 = the beginning
    let timerVariable = setInterval(function(){                 // timerVariable holds the anonymous function that generates random numbers
        num = Math.random();                                    // num = Math.random(); -- uses the let num; above to store a variable of a randomly generated number between 0 to 1
        times ++;                                               // adds 1 to the loop variable for 'times'
        if(num > 0.75) {                                        // if asks if the random number is > 0.75. If it's not it re-runs the loop
            clearInterval(timerVariable);                       // clearInterval(timerVariable) - stops the timer loop from executing endlessly into the void
            console.log("randomGame() - How many times it took:" + times);     // prints to the console my message and the ending 'times' variable
        }
    }, 1000)                                                    // Interval executes every 1000 ms = 1 second
}

// Calling the function for testing. 
randomGame();
randomGame();
randomGame();