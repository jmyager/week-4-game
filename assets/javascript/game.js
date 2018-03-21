
// Create variables to track each character's health
var gokuHealth = 100;
var gokuDamage = 8;
var vegetaHealth = 80;
var vegetaDamage = 12;
var cellHealth = 120;
var cellDamage = 4;
var buuHealth = 60;
var buuDamage = 16;
var character = "";
var opponent = "";
var myHealth = 0;
var opponentHealth = 0;
var winCount = 3;

// Define function to reset the game
function resetGame() {
    gokuHealth = 100;
    gokuDamage = 8;
    vegetaHealth = 80;
    vegetaDamage = 10;
    cellHealth = 120;
    cellDamage = 4;
    buuHealth = 60;
    buuDamage = 16;
    character = "";
    opponent = "";
    myHealth = 0;
    opponentHealth = 0;
    winCount = 3;

    // Reset all images to original divs
    $("#goku").html("<img src='assets/images/goku.png' alt='goku'>");
    $("#vegeta").html("<img src='assets/images/vegeta.png' alt='vegeta'>");
    $("#cell").html("<img src='assets/images/cell.png' alt='cell'>");
    $("#buu").html("<img src='assets/images/buu.png' alt='buu'>");
    $("#gokuOpponent").html("");
    $("#vegetaOppponent").html("");
    $("#cellOpponent").html("");
    $("#buuOpponent").html("");
    $("#imageChoice").html("");
    $("#opponentImageChoice").html("");
    $("#characterHealthDisplay").html("");
    $("#opponentHealthDisplay").html("");

    // Remove the restart button
    $("#restart").html("");

    // Reset text
    $("#choose").html("<h1>CHOOSE YOUR CHARACTER:</h1>");
    $("#message").html("");
}

// No javascript will begin until page fully loads
$(document).ready(function() {


// Player clicks on a character and image is moved to Your Character section
// H2 appears with text "Your Character"
// Other 3 images are moved to opponent section
// character variable is established with player choice
    $("#goku").click(function() {
        $("#choice").html("<h2>Your Character</h2>");
        $("#goku, #vegeta, #cell, #buu, #choose").html("");
        $("#imageChoice").html("<img src='assets/images/goku.png' />");
        $("#vegetaOpponent").html("<img src='assets/images/vegeta.png' />");
        $("#cellOpponent").html("<img src='assets/images/cell.png' />");
        $("#buuOpponent").html("<img src='assets/images/buu.png' />");
        character = "goku";
        $("#characterHealthDisplay").html(gokuHealth);
    })
    
    $("#vegeta").click(function() {
        $("#choice").html("<h2>Your Character</h2>");
        $("#goku, #vegeta, #cell, #buu, #choose").html("");
        $("#imageChoice").html("<img src='assets/images/vegeta.png' />");
        $("#gokuOpponent").html("<img src='assets/images/goku.png' />");
        $("#cellOpponent").html("<img src='assets/images/cell.png' />");
        $("#buuOpponent").html("<img src='assets/images/buu.png' />");
        character = "vegeta";
        $("#characterHealthDisplay").html(vegetaHealth);
    })

    $("#cell").click(function() {
        $("#choice").html("<h2>Your Character</h2>");
        $("#goku, #vegeta, #cell, #buu, #choose").html("");
        $("#imageChoice").html("<img src='assets/images/cell.png' />");
        $("#gokuOpponent").html("<img src='assets/images/goku.png' />");
        $("#vegetaOpponent").html("<img src='assets/images/vegeta.png' />");
        $("#buuOpponent").html("<img src='assets/images/buu.png' />");
        character = "cell";
        $("#characterHealthDisplay").html(cellHealth);
    })

    $("#buu").click(function() {
        $("#choice").html("<h2>Your Character</h2>");
        $("#goku, #vegeta, #cell, #buu, #choose").html("");
        $("#imageChoice").html("<img src='assets/images/buu.png' />");
        $("#gokuOpponent").html("<img src='assets/images/goku.png' />");
        $("#vegetaOpponent").html("<img src='assets/images/vegeta.png' />");
        $("#cellOpponent").html("<img src='assets/images/cell.png' />");
        character = "buu";
        $("#characterHealthDisplay").html(buuHealth);
    })


    // Player selects an enemy and that image is moved to defender section
    // H2 appears with text "Your Opponent"
    // Opponent variable is established with player's opponent choice
    $("#gokuOpponent").click(function() {
        $("#opponentChoice").html("<h2>Your Opponent</h2>");
        $("#gokuOpponent").html("");
        $("#opponentImageChoice").html("<img src='assets/images/goku.png' />");
        opponent = "goku";
        $("#opponentHealthDisplay").html(gokuHealth);
    })

    $("#vegetaOpponent").click(function() {
        $("#opponentChoice").html("<h2>Your Opponent</h2>");
        $("#vegetaOpponent").html("");
        $("#opponentImageChoice").html("<img src='assets/images/vegeta.png' />");
        opponent = "vegeta";
        $("#opponentHealthDisplay").html(vegetaHealth);
    })

    $("#cellOpponent").click(function() {
        $("#opponentChoice").html("<h2>Your Opponent</h2>");
        $("#cellOpponent").html("");
        $("#opponentImageChoice").html("<img src='assets/images/cell.png' />");
        opponent = "cell";
        $("#opponentHealthDisplay").html(cellHealth);
    })

    $("#buuOpponent").click(function() {
        $("#opponentChoice").html("<h2>Your Opponent</h2>");
        $("#buuOpponent").html("");
        $("#opponentImageChoice").html("<img src='assets/images/buu.png' />");
        opponent = "buu";
        $("#opponentHealthDisplay").html(buuHealth);
    })


    // Pressing attack button attacks enemy character and enemy counter-attacks
    $("#attack").click(function() {

        // If player chose Goku conditionals
        if (character === "goku" && opponent === "vegeta") {
            vegetaHealth = vegetaHealth - gokuDamage;
            gokuHealth = gokuHealth - vegetaDamage;
            $("#characterHealthDisplay").html(gokuHealth);
            $("#opponentHealthDisplay").html(vegetaHealth);
            $("#message").html("You struck vegeta for " + gokuDamage + ". Vegeta counter-attacked for " + vegetaDamage);
            gokuDamage = gokuDamage + 8;
            myHealth = gokuHealth;
            opponentHealth = vegetaHealth;
        }

        if (character === "goku" && opponent === "cell") {
            cellHealth = cellHealth - gokuDamage;
            gokuHealth = gokuHealth - cellDamage;
            $("#characterHealthDisplay").html(gokuHealth);
            $("#opponentHealthDisplay").html(cellHealth);
            $("#message").html("You struck cell for " + gokuDamage + ". Cell counter-attacked for " + cellDamage);
            gokuDamage = gokuDamage + 8;
            myHealth = gokuHealth;
            opponentHealth = cellHealth;
        }

        if (character === "goku" && opponent === "buu") {
            buuHealth = buuHealth - gokuDamage;
            gokuHealth = gokuHealth - buuDamage;
            $("#characterHealthDisplay").html(gokuHealth);
            $("#opponentHealthDisplay").html(buuHealth);
            $("#message").html("You struck Buu for " + gokuDamage + ". Buu counter-attacked for " + buuDamage);
            gokuDamage = gokuDamage + 8;
            myHealth = gokuHealth;
            opponentHealth = buuHealth;
        }

        // If player chose Vegeta conditionals
        if (character === "vegeta" && opponent === "goku") {
            gokuHealth = gokuHealth - vegetaDamage;
            vegetaHealth = vegetaHealth - gokuDamage;
            $("#characterHealthDisplay").html(vegetaHealth);
            $("#opponentHealthDisplay").html(gokuHealth);
            $("#message").html("You struck Goku for " + vegetaDamage + ". Goku counter-attacked for " + gokuDamage);
            vegetaDamage = vegetaDamage + 10;
            myHealth = vegetaHealth;
            opponentHealth = gokuHealth;
        }

        if (character === "vegeta" && opponent === "cell") {
            cellHealth = cellHealth - vegetaDamage;
            vegetaHealth = vegetaHealth - cellDamage;
            $("#characterHealthDisplay").html(vegetaHealth);
            $("#opponentHealthDisplay").html(cellHealth);
            $("#message").html("You struck Cell for " + vegetaDamage + ". Cell counter-attacked for " + cellDamage);
            vegetaDamage = vegetaDamage + 10;
            myHealth = vegetaHealth;
            opponentHealth = cellHealth;
        }

        if (character === "vegeta" && opponent === "buu") {
            buuHealth = buuHealth - vegetaDamage;
            vegetaHealth = vegetaHealth - buuDamage;
            $("#characterHealthDisplay").html(vegetaHealth);
            $("#opponentHealthDisplay").html(buuHealth);
            $("#message").html("You struck Buu for " + vegetaDamage + ". Buu counter-attacked for " + buuDamage);
            vegetaDamage = vegetaDamage + 10;
            myHealth = vegetaHealth;
            opponentHealth = buuHealth;
        }

        // If player chose Cell conditionals
        if (character === "cell" && opponent === "goku") {
            gokuHealth = gokuHealth - cellDamage;
            cellHealth = cellHealth - gokuDamage;
            $("#characterHealthDisplay").html(cellHealth);
            $("#opponentHealthDisplay").html(gokuHealth);
            $("#message").html("You struck Goku for " + cellDamage + ". Goku counter-attacked for " + gokuDamage);
            cellDamage = cellDamage + 4;
            myHealth = cellHealth;
            opponentHealth = gokuHealth;
        }

        if (character === "cell" && opponent === "vegeta") {
            vegetaHealth = vegetaHealth - cellDamage;
            cellHealth = cellHealth - vegetaDamage;
            $("#characterHealthDisplay").html(cellHealth);
            $("#opponentHealthDisplay").html(vegetaHealth);
            $("#message").html("You struck Vegeta for " + cellDamage + ". Vegeta counter-attacked for " + vegetaDamage);
            cellDamage = cellDamage + 4;
            myHealth = cellHealth;
            opponentHealth = vegetaHealth;
        }

        if (character === "cell" && opponent === "buu") {
            buuHealth = buuHealth - cellDamage;
            cellHealth = cellHealth - buuDamage;
            $("#characterHealthDisplay").html(cellHealth);
            $("#opponentHealthDisplay").html(buuHealth);
            $("#message").html("You struck Buu for " + cellDamage + ". Buu counter-attacked for " + buuDamage);
            cellDamage = cellDamage + 4;
            myHealth = cellHealth;
            opponentHealth = buuHealth;
        }

        // If player chose Buu conditionals
        if (character === "buu" && opponent === "goku") {
            gokuHealth = gokuHealth - buuDamage;
            buuHealth = buuHealth - gokuDamage;
            $("#characterHealthDisplay").html(buuHealth);
            $("#opponentHealthDisplay").html(gokuHealth);
            $("#message").html("You struck Goku for " + buuDamage + ". Goku counter-attacked for " + gokuDamage);
            buuDamage = buuDamage + 16;
            myHealth = buuHealth;
            opponentHealth = gokuHealth;
        }

        if (character === "buu" && opponent === "vegeta") {
            vegetaHealth = vegetaHealth - buuDamage;
            buuHealth = buuHealth - vegetaDamage;
            $("#characterHealthDisplay").html(buuHealth);
            $("#opponentHealthDisplay").html(vegetaHealth);
            $("#message").html("You struck Vegeta for " + buuDamage + ". Vegeta counter-attacked for " + vegetaDamage);
            buuDamage = buuDamage + 16;
            myHealth = buuHealth;
            opponentHealth = vegetaHealth;
        }

        if (character === "buu" && opponent === "cell") {
            cellHealth = cellHealth - buuDamage;
            buuHealth = buuHealth - cellDamage;
            $("#characterHealthDisplay").html(buuHealth);
            $("#opponentHealthDisplay").html(cellHealth);
            $("#message").html("You struck Cell for " + buuDamage + ". Cell counter-attacked for " + cellDamage);
            buuDamage = buuDamage + 16;
            myHealth = buuHealth;
            opponentHealth = cellHealth;
        }

        // If player's health reaches 0, end the game and display a reset button
        if (myHealth <= 0) {
            $("#attack").off;
            $("#message").html("You died! Game Over!");
            $("#imageChoice").html("");
            $("#restart").html("<button>Restart</button");
        }

        // If opponent's health reaches 0, remove opponent image and display message
        // Remove the opponent image
        // Display message saying "you beat them"
        if (opponentHealth <= 0) {
            $("#opponentImageChoice").html("");
            $("#message").html("You beat them! Select a new opponent.");
            winCount--;
        }

        // If all 3 opponents have been defeated, a message is displayed saying the player won
        if (winCount === 0) {
            $("#message").html("You win! Your power level is over 9000!");
            $("#attack").off;
            $("#restart").html("<button>Restart</button");
        }
    })

    //If restart button is clicked, run the resetGame function
    $("#restart").click(function() {
        resetGame();
    })
})