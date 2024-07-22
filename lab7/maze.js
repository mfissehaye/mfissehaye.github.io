$(document).ready(function() {
    let gameStarted = false;
    let hitWall = false;

    $("#start").click(function() {
        $(".boundary").removeClass("youlose");
        $("#status").text("Move your mouse to the 'E' without touching any walls.");
        gameStarted = true;
        hitWall = false;
    });

    $(".boundary").mouseover(function() {
        if (gameStarted) {
            $(".boundary").addClass("youlose");
            $("#status").text("You lost! Click the 'S' to try again.");
            hitWall = true;
            gameStarted = false;
        }
    });

    $("#end").mouseover(function() {
        if (gameStarted && !hitWall) {
            $("#status").text("You won! Click the 'S' to play again.");
            gameStarted = false;
        }
    });

    $("#maze").mouseleave(function() {
        if (gameStarted) {
            $(".boundary").addClass("youlose");
            $("#status").text("You lost! Click the 'S' to try again.");
            hitWall = true;
            gameStarted = false;
        }
    });
});
