// Looping a triangle

function exercise_1() {
    "use strict";
    
    var string = "";
    var charUsed = "#";

    for (var i = 0; i < 7; i++) {
        string += charUsed;
        console.log(string);
    }
}

// FizzBuzz

function fizzBuzz() {
    "use strict";

    for (var i = 1; i <= 100; i++) {
        var string = "";

        if (i % 3 === 0) {
            string += "Fizz";
        }

        if (i % 5 === 0) {
            string += "Buzz";
        }

        console.log(string || i);
    }
}

// Chess Board

function chessBoard() {
    "use strict";

    var size = 8,
        board = "",
        symbolUsed = "#";

    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            board += Math.abs(i - j) % 2 === 0 ? " " : symbolUsed;
        }
        board += "\n";
    }

    console.log(board);
}