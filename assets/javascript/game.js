$(document).ready(function() {

// Initialize game
    
    var wins = 0;
    var losses = 0;
    var yourScore = 0;
    var numberToMatch = 0;
    var randomValue = 0;

    var gemRed = {
        color: "red",
        value: 0
    };
    var gemBlue = {
        color: "blue",
        value: 0
    };
    var gemGreen = {
        color: "green",
        value: 0
    };
    var gemYellow = {
        color: "yellow",
        value: 0
    };

    var gems = [gemRed, gemBlue, gemGreen, gemYellow];
    var hiddenValues = [];

    
// Create repeatable function to contain game logic

    function crystalGame() {

        // Turn off event listeners for rounds 2+

        $("#gemRed").off("click");
        $("#gemBlue").off("click");
        $("#gemGreen").off("click");
        $("#gemYellow").off("click");

        // Set variables and keys to 0, select new random number to match

        yourScore = 0;
        hiddenValues = [];
        numberToMatch = Math.floor(Math.random() * (121 - 19) +19);
        randomValue = 0;

        for (k = 0; k < gems.length; k++) {
            gems[k].value = 0;
        };

        // Use a for loop to push 4 random numbers into an array, then assign each number to the gem variables.

        for (i = 0; i < gems.length; i++) {
            function generateRandom() {
                randomValue = Math.floor(Math.random() * 12) + 1;
                if (!hiddenValues.includes(randomValue)) {
                    hiddenValues.push(randomValue);
                }
                else {
                    generateRandom();
                }
            }
            generateRandom();
        };

        for (j = 0; j < hiddenValues.length; j++) {
            gems[j].value = hiddenValues[j];
        }; 

        // Print values to page

        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#yourScore").text(yourScore);
        $("#numberToMatch").text(numberToMatch);

        
        // Use if statements to determine a win or loss, then reset the game.

        function winOrLose() {
            if (yourScore === numberToMatch) {
                wins++;
                alert("You win!");
                crystalGame();
            }
            else if (yourScore > numberToMatch) {
                losses++;
                alert("You lose!");
                crystalGame();
            }
        };
        
        // Create click event functions for each gem
        
        $("#gemRed").on("click", function() {
            yourScore = yourScore + gemRed.value;
            $("#yourScore").text(yourScore);
            winOrLose();
        });
        $("#gemBlue").on("click", function() {
            yourScore = yourScore + gemBlue.value;
            $("#yourScore").text(yourScore);
            winOrLose();
        });
        $("#gemGreen").on("click", function() {
            yourScore = yourScore + gemGreen.value;
            $("#yourScore").text(yourScore);
            winOrLose();
        });
        $("#gemYellow").on("click", function() {
            yourScore = yourScore + gemYellow.value;
            $("#yourScore").text(yourScore);
            winOrLose();
        }); 
    };

    crystalGame();
});  