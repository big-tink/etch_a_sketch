generateBoard();
setColor();

function generateBoard(x = 16) {


    for (squares = x*x;squares > 0; squares--) {
        const container = document.querySelector('#container');
        const boxSize = 760 / x;
        const grid = document.createElement('div')
        grid.setAttribute('class', 'grid');
        grid.style.width = `${boxSize}px`
        grid.style.height = `${boxSize}px`
        container.appendChild(grid)
    }

    setColor();

};

// creates a new game
const button = document.querySelector('button');

button.addEventListener('click', () => {

    const container = document.querySelector('#container')
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }

    let dimensions = prompt("Please enter a size for the game?")

    if (dimensions > 0 && dimensions < 101) {
        generateBoard(dimensions);
    } else {
        dimensions = prompt("The number must be between 1 and 100.");
        generateBoard(dimensions);
    }

});

function setColor() {

const game = document.querySelectorAll('.grid')

for (let i = 0; i < game.length; i++) {

    let opacity = 0;

    game[i].addEventListener("mouseover", () => {
        let colorRed = Math.floor(Math.random() * 255);
        let colorGreen = Math.floor(Math.random() * 255);
        let colorBlue = Math.floor(Math.random() * 255);

        if (opacity < 1) {
        opacity = opacity + .1;
        }

        game[i].style.backgroundColor = `rgb(${colorRed}, ${colorGreen}, ${colorBlue}, ${opacity})`;
        console.log("it works")

    });
}

};

