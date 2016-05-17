
var turn = 0;
var winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
function firstMove () {
  var moves =  getCurrentMoves ();
  if (moves[5] !== "O"){
    $('#B2').text("X")
  } else if (moves[5] === "O"){
    $('#A1').text("X")
  }
}

function nextMove () {
  var moves = getCurrentMoves ();
  if (moves[8] === "O") {
    $('#B3').text("X")
  } else {
    $('#B3').text("X")
  }
}

function computerCheckMove (squares, board) { /* this function checks each winning combo and places a N into array if it is
 occupied by the player and returns each array to the calling function. Modeled after playerOccupiesSquares */
  var bestMoveId = [];
  var numOccupiedSquares = 0;
  for (var i = 0; i < squares.length; i++) {
    var idx = squares[i];
    var value = board[idx];
    if (value === "X") {
      bestMoveId.push(value);
    } else if ( value === "O") {
      bestMoveId.push(value);

      } else {
          bestMoveId.push(idx);
    }
  }
    return bestMoveId;
}
function computerMakeMoveX (board) {
  for (var i = 0; i < winningCombos.length; i++) {
    var moveCount = 0;
    var rightMove;
    var totalMove = 0;
    var combo = winningCombos[i];
    var moves = computerCheckMove(combo, board) // passes "O" to player
      for (var j = 0; j < moves.length; j++) {
        if ( moves[j] === "X") {
          moveCount = moveCount + 1;
          totalMove = totalMove + 1;
        } else if (moves[j] !== "X" && moves[j] !== "O") {
          rightMove = moves[j];
          totalMove = totalMove + 1;
        }
      if (moveCount === 2 && totalMove === 3) {
        if (rightMove === 0) {
          $('#A1').text("X");
          turn = turn + 1;
          return;
        } else if (rightMove === 1) {
          $('#A2').text("X");
          turn = turn + 1;
          return;
        } else if (rightMove === 2) {
          $('#A3').text("X");
          turn = turn + 1;
          return;
        } else if (rightMove === 3) {
          $('#B1').text("X");
          turn = turn + 1;
          return;
        } else if (rightMove === 4) {
          $('#B2').text("X");
          turn = turn + 1;
          return;
        } else if (rightMove === 5) {
          $('#B3').text("X");
          turn = turn + 1;
          return;
        } else if (rightMove === 6) {
          $('#C1').text("X");
          turn = turn + 1;
          return;
        } else if (rightMove === 7) {
          $('#C2').text("X");
          turn = turn + 1;
          return;
        } else if (rightMove === 8) {
          $('#C3').text("X");
          turn = turn + 1;
          return;
        }
        return;
      }
     }
   }
  }

function computerMakeMoveO (board) {
for (var i = 0; i < winningCombos.length; i++) {
  var rightMove = 0;
  var moveCount = 0;
  var totalMove = 0;
  var combo = winningCombos[i];
  var moves = computerCheckMove(combo, board) // passes "X" to player
  for (var j = 0; j < moves.length; j++) {
    if ( moves[j] === "O") {
      moveCount = moveCount + 1;
      totalMove = totalMove + 1;
    } else if (moves[j] !== "O" && moves[j] !== "X") {
      rightMove = moves[j];
      totalMove = totalMove + 1;
    }
  }
  if (moveCount === 2 && totalMove === 3) {
    if (rightMove === 0) {
      $('#A1').text("X");
      turn = turn + 1;
      return;
    } else if (rightMove === 1) {
      $('#A2').text("X");
      turn = turn + 1;
      return;
    } else if (rightMove === 2) {
      $('#A3').text("X");
      turn = turn + 1;
      return;
    } else if (rightMove === 3) {
      $('#B1').text("X");
      turn = turn + 1;
      return;
    } else if (rightMove === 4) {
      $('#B2').text("X");
      turn = turn + 1;
      return;
    } else if (rightMove === 5) {
      $('#B3').text("X");
      turn = turn + 1;
      return;
    } else if (rightMove === 6) {
      $('#C1').text("X");
      turn = turn + 1;
      return;
    } else if (rightMove === 7) {
      $('#C2').text("X");
      turn = turn + 1;
      return;
    } else if (rightMove === 8) {
      $('#C3').text("X");
      turn = turn + 1;
      return;
    }
    return;
  }
}
}


function checkWinner (board) {
  for (var i = 0; i < winningCombos.length; i++) {
    var combo = winningCombos[i];
    if (playerOccupiesSquares("O", combo, board)) { // passes "O" to player
      return "O";
    }
    if (playerOccupiesSquares("X", combo, board)) { // passes "X" to player
      return "X"
    }
  }
  return null;
}

function playerOccupiesSquares (player, squares, board) {
  for (var i = 0; i < squares.length; i++) {
    var idx = squares[i]; //squares are winning combos [i]
    var value = board[idx]; //
    if (value !== player) {
      return false;
    }
  }
  return true;
}


function getCurrentMoves () {
    var buttons = $('.letter');
    var moves = [];
    for (var i = 0; i < buttons.length; i++) {
      var button = $(buttons[i]);
      moves.push(button.text());
    }
    return moves;
}

$(function () {
  $('.letter').click(function () {
    var currentDisplay = $(this).text();
      if (currentDisplay === '') {
      if (turn % 2 === 0) {
        $(this).text("O");
      } else {
        $(this).text("X");
      }
        turn = turn + 1;
      // if (currentDisplay === "O" || "X") {
      //    $(this).off();
      // }
      if (turn === 1) {
        firstMove ();
        turn = turn + 1;
      }
      if (turn  === 3) {
        nextMove ();
        turn = turn +1;
      }
      if (turn % 2 === 1) {
        var board = getCurrentMoves();
        var bestMove = computerMakeMoveX (board);
      }
      if (turn % 2 === 1) {
        var board =getCurrentMoves();
        var bestMove = computerMakeMoveO (board);
      }
      if (turn !== 1) {
        var board = getCurrentMoves();
        var winner = checkWinner (board);
    }
      if (winner) {
        $('#display-box')
        .text('The winner is ' + winner)
        .show();
      }
    } else if (currentDisplay === 'o' || currentDisplay === 'x') {
        // do nothing
      }
      if (turn === 9) {
        $('#winner').text('Draw');
        $('#play-again-button').show();
      }
    });

    $('#reset').click(function () {
      location.reload();
  });
});
