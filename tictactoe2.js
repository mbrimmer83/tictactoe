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
function checkWinner() {
  var moves = currentMoves();
  for (var i = 0; i < winningCombos.length; i++) {
    var combos = winningCombos[i];
    for (var j = 0; j < combos.length; j++) {
      if (combos[j] === currentMoves[j]) {

      }
    }
  }
}

function currentMoves() {
  var buttons = $('.letter');
  var moves = [];
  for (var i = 0; i < buttons.length; i++) {
    var button = $(buttons[i]);
    moves.push(button);
  }
  return moves();
}
$(function() {
  $('.letter').click(function () {
    var currentDisplay = $(this).text();
    if (turn % 2 === 0) {
      $(this).text('O');
      $(this).off();
    } else if (turn % 2 === 1) {
      $(this).text('X');
      $(this).off();
    }
    turn += 1;
  });
});
