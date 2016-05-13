
var turn = 0;
var winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 6, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
function firstMove () {
  var moves =  getCurrentMoves ();
  var move = moves[4];
  if (move === ""){
    $('#B2').text("X")
  } else {
    $('#A1').text("X")
  }
  turn = turn + 1;
}

// function playerOccupiesSquares (player, squares, board) {
//   for (var i = 0; i < squares.length; i++) {
//     var idx = squares[i];
//     var value = board[idx];
//     if (value !== player) {
//       return false;
//     }
//   }
//   return true;
// }

function checkWinner (board) {
  for (var i = 0; i < winningCombos.length; i++) {
    var combo = winningCombos[i];
    if (playerOccupiesSquares("O", combo, board)) {
      return "O";
    }
    if (playerOccupiesSquares("X", combo, board)) {
      return "X"
    }
  }
  return null;
}

function playerOccupiesSquares (player, squares, board) {
  for (var i = 0; i < squares.length; i++) {
    var idx = squares[i];
    var value = board[idx];
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
      }
      var board = getCurrentMoves();
      var winner = checkWinner (board);
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
