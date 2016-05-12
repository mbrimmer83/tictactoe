
// $(function () {
//   $('.letter').click(function () {
//     var currentDisplay = $(this).text();
//     if (currentDisplay === "") {
//       $(this).text("O");
//     } else if (currentDisplay === "O") {
//       $(this).text("X");
//     } else if (currentDisplay === "X") {
//       $(this).text("");
//     }
//   });
// });

var turn = true;
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

function computerMove(board, combo) {

}

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
    var buttons = $('button');
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
      if (turn === true) {
        $(this).text("O");
        turn = false;
      } else if (turn === false) {
        $(this).text("X");
        turn = true;
      }
      if (currentDisplay === "O" || "X") {
         $(this).off();
      }
      var board = getCurrentMoves();
      var winner = checkWinner (board);
      if (winner) {
        alert("The winner is " + winner)
      }
  });
});
