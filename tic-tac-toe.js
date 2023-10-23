document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    
    squares.forEach((square) => {
      square.classList.add("square");
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    let currentPlayer = "X";
    
    squares.forEach((square) => {
      square.addEventListener("click", () => {
        if (!square.textContent) {
          square.textContent = currentPlayer;
          square.classList.add(currentPlayer);
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    
    squares.forEach((square) => {
      square.addEventListener("mouseenter", () => {
        square.classList.add("hover");
      });
      square.addEventListener("mouseleave", () => {
        square.classList.remove("hover");
      });
    });
  
    let gameOver = false;
    let winner = null;
  
    squares.forEach((square) => {
      square.addEventListener("click", () => {
        if (!gameOver && !square.classList.contains("X") && !square.classList.contains("O")) {
          square.classList.remove("hover");
          square.classList.add(currentPlayer);
          square.textContent = currentPlayer;
  
          if (checkWinner(currentPlayer)) {
            gameOver = true;
            winner = currentPlayer;
            document.getElementById("status").classList.add("you-won");
            document.getElementById("status").textContent = `Congratulations! ${currentPlayer} is the Winner!`;
          } else if (checkTie()) {
            gameOver = true;
            document.getElementById("status").textContent = "It's a Tie!";
          } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
          }
        }
      });
    });
  
    function checkWinner(player) {
      const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6],            // Diagonals
      ];
  
      for (const line of lines) {
        const [a, b, c] = line;
        if (squares[a].textContent === player && squares[b].textContent === player && squares[c].textContent === player) {
          return true;
        }
      }
      return false;
    }
  
    function checkTie() {
      return [...squares].every((square) => square.classList.contains("X") || square.classList.contains("O"));
    }
  });
  