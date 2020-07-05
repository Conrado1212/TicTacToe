const player1 = 'fa-circle-o';
const player2 = 'fa-times';
let round = 1;
const field = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
const wins = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

const cubes = [...document.querySelectorAll('.cube')];
cubes.forEach(cube => cube.addEventListener('click', click));

function click(event) {
    const { row, column } = event.target.dataset;
    const turn = round % 2 === 0 ? player2 : player1;
    if (field[row][column] !== '') return;
    event.target.classList.add(turn);
    field[row][column] = turn;
    round++;

    console.log(check());
}

function check() {
    const result = field.reduce((total, row) => total.concat(row));
    //console.log(result);
    let winner = null;
    let moves = {
        'fa-times': [],
        'fa-circle-o': []
    };
    result.forEach((field, index) => moves[field] ? moves[field].push(index) : null);
    wins.forEach(win => {
        if (win.every(index => moves[player1].indexOf(index) > -1)) {
            winner = 'Winner: player 1';
            alert("Wygrales");
        }
        if (win.every(index => moves[player2].indexOf(index) > -1)) {
            winner = 'Winner: player 2';
            alert("Wygrales");
        }
    });

    return winner;

}



