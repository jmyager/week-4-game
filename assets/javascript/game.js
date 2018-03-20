
// No javascript will begin until page fully loads
$(document).ready(function() {

// Create variables to track each character's health
var characterHealth = 100;
var characterDamage = 8;
var opponentHealth = 100;
var character = "";
var opponent = "";

// Player clicks on a character and image is moved to Your Character section
// H1 appears with text "Your Character"
// Other 3 images are moved to opponent section
// character variable is established with player choice
    $("#goku").click(function() {
        $("#choice").html("<h1>Your Character</h1>");
        $("#goku, #vegeta, #cell, #buu").html("");
        $("#imageChoice").html("<img src='assets/images/goku.png' />");
        $("#vegetaOpponent").html("<img src='assets/images/vegeta.png' />");
        $("#cellOpponent").html("<img src='assets/images/cell.png' />");
        $("#buuOpponent").html("<img src='assets/images/buu.png' />");
        character = "goku";
        $("#characterHealthDisplay").html(characterHealth);
    })

    $("#vegeta").click(function() {
        $("#choice").html("<h1>Your Character</h1>");
        $("#goku, #vegeta, #cell, #buu").html("");
        $("#imageChoice").html("<img src='assets/images/vegeta.png' />");
        $("#gokuOpponent").html("<img src='assets/images/goku.png' />");
        $("#cellOpponent").html("<img src='assets/images/cell.png' />");
        $("#buuOpponent").html("<img src='assets/images/buu.png' />");
        character = "vegeta";
        $("#characterHealthDisplay").html(characterHealth);
    })

    $("#cell").click(function() {
        $("#choice").html("<h1>Your Character</h1>");
        $("#goku, #vegeta, #cell, #buu").html("");
        $("#imageChoice").html("<img src='assets/images/cell.png' />");
        $("#gokuOpponent").html("<img src='assets/images/goku.png' />");
        $("#vegetaOpponent").html("<img src='assets/images/vegeta.png' />");
        $("#buuOpponent").html("<img src='assets/images/buu.png' />");
        character = "cell";
        $("#characterHealthDisplay").html(characterHealth);
    })

    $("#buu").click(function() {
        $("#choice").html("<h1>Your Character</h1>");
        $("#goku, #vegeta, #cell, #buu").html("");
        $("#imageChoice").html("<img src='assets/images/buu.png' />");
        $("#gokuOpponent").html("<img src='assets/images/goku.png' />");
        $("#vegetaOpponent").html("<img src='assets/images/vegeta.png' />");
        $("#cellOpponent").html("<img src='assets/images/cell.png' />");
        character = "buu";
        $("#characterHealthDisplay").html(characterHealth);
    })


    // Player selects an enemy and that image is moved to defender section
    // H1 appears with text "Your Opponent"
    // Opponent variable is established with player's opponent choice
    $("#gokuOpponent").click(function() {
        $("#opponentChoice").html("<h1>Your Opponent</h1>");
        $("#gokuOpponent").html("");
        $("#opponentImageChoice").html("<img src='assets/images/goku.png' />");
        opponent = "goku";
        $("#opponentHealthDisplay").html(opponentHealth);
    })

    $("#vegetaOpponent").click(function() {
        $("#opponentChoice").html("<h1>Your Opponent</h1>");
        $("#vegetaOpponent").html("");
        $("#opponentImageChoice").html("<img src='assets/images/vegeta.png' />");
        opponent = "vegeta";
        $("#opponentHealthDisplay").html(opponentHealth);
    })

    $("#cellOpponent").click(function() {
        $("#opponentChoice").html("<h1>Your Opponent</h1>");
        $("#cellOpponent").html("");
        $("#opponentImageChoice").html("<img src='assets/images/cell.png' />");
        opponent = "cell";
        $("#opponentHealthDisplay").html(opponentHealth);
    })

    $("#buuOpponent").click(function() {
        $("#opponentChoice").html("<h1>Your Opponent</h1>");
        $("#buuOpponent").html("");
        $("#opponentImageChoice").html("<img src='assets/images/buu.png' />");
        opponent = "buu";
        $("#opponentHealthDisplay").html(opponentHealth);
    })


    // Pressing attack button attacks enemy character and enemy counter-attacks
    $("#attack").click(function() {
        if (character === "goku" && opponent === "vegeta") {
            opponentHealth = opponentHealth - characterDamage;
            characterHealth = characterHealth - 20;
            $("#characterHealthDisplay").html(characterHealth);
            $("#opponentHealthDisplay").html(opponentHealth);
            $("#message").html("You struck vegeta for " + characterDamage + ". Vegeta counter-attacked for 20 damage.");
            characterDamage = characterDamage + 8;
        }
    })

    // As you attack more your characters damage increases but enemy's attack damage stays the same
    // If player's character is defeated (losing all health), a reset button appears
    // If enemy character is defeated, the image dissapears and text appears that "x enemy has been defeated"
    // The player can select another enemy from remaining opponents
    // If player has defeated all 3 enemies text displays saying "You win!"

})