import React, { useState, useEffect } from 'react'; // Import react components and such
import ReactDOM from 'react-dom'; // import react virtual dom and how we interact with it
import './index.css'; //import style sheet

function Square(props) { // function component, it only exists to be clicked
    return ( // return an HTML element of the following properties
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button> // it counts as a button
    ); // onClick = {javascript, pull the property related to onClick from parent/holder component}
    // {props.value} between buttons means to display the value property from the parent element as the button's text
}

function Board(props) {
    function renderSquare(i) { //method which takes in a property
        return (
            <Square //make a square component in html, defined with the above function
                value={props.squares[i]} // the square has a value of squares[i], squares prop exists in a parent component, i is passed in
                // the square's value is taken from this one.
                onClick={() => props.onClick(i)} // call onClick from parent when square is clicked
            />
        );
    }
    return ( // make squares with an associated value, div organizes into rows with CSS
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

function Game() { // parent component, sorta, it has all states and holds other components
    const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);

    function handleClick(i) { // handleClick function where i is the value of the square
        const history1 = history.slice(0, stepNumber + 1); // the history value of the click is the current history + 1, slice to make a new history object
        const current = history1[history1.length - 1]; // var of current state, it is the history object/property -1 of its elements
        const squares = current.squares.slice(); // make a copy of the current object (which is the last history object), it is called squares
        if (calculateWinner(squares) || squares[i]) { // call calculate winner function or if the current squares is the same as the input (9)
            return; // end, there is a winner, or a draw, board is full
        }
        squares[i] = xIsNext ? 'X' : 'O'; // change the state of the squares variable at index i, indicate whose turn it is next
        setHistory(history1.concat([{ // add new squares from this click to the history object
            squares: squares,
        }]));
        setStepNumber(history1.length); // set step equal to length of history object
        setXIsNext(!xIsNext); // flip state of xIsNext object to indicate next turn
    }

    function jumpTo(step) { // change board based on step input
        setStepNumber(step); // the step Number is the input
        setXIsNext((step % 2) === 0); // indicate who has the next turn (evens are X, odds are O)
    }

    const history1 = history; // history variable is same as state history
    const current = history1[stepNumber]; // current board is history index at the current step number
    const winner = calculateWinner(current.squares); // set winner equal to current squares object (received from history)

    const moves = history1.map((step, move) => { //variable of changing state, equal to the result of a callback function on each value in array history
        const desc = move ? // ternary to indicate what move we're at, if there is a move input at all, indicate a number, otherwise it's the game start
            'Go to move #' + move :
            'Go to game start';
        return ( // for each move, create an element
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li> // elements have a key, equal to the total number of moves (an array). List of buttons which call jumpTo using the current move input as its input
        );
    });

    let status;
    if (winner) { // if there is a non-null value in winner
        status = 'Winner: ' + winner; // display the winner
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O'); // indicate whose turn it is next if no winner
    }

    return ( // what render should display
        <div className="game">
            <div className="game-board">
                <Board // display board component and current squares or board state
                    squares={current.squares}
                    onClick={(i) => handleClick(i)} // if the board is clicked, use the handle-click function
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div> // status is current game status. moves is ordered list of move history
    );
}

// ========================================

ReactDOM.render( // render the user's view starting with game
    <Game />,
    document.getElementById('root')
);

function calculateWinner(squares) {
    const lines = [ // an array of an array of 8 x 3, representing rows of horizontal, vertical, and diagonal combinations
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) { // for each line
        const [a, b, c] = lines[i]; // split up a given array row
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { // if there's 3 in a row of any combo
            return squares[a]; // return the entry in the first row, that is the winning side
        }
    }
    return null; // return null if no "row" has 3 of the same symbol
}

export default Game;