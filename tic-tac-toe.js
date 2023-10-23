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
  });
  
  
