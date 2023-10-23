document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X';

    squares.forEach((square) => {
        square.classList.add('square');
        square.addEventListener('click', function () {
            if (!square.textContent) { // Check if the square is empty
                square.textContent = currentPlayer; // Set X or O
                square.classList.add(currentPlayer); // Add X or O class
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Toggle player
            }
        });
    });
});
