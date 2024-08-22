


// function generateRows(rows = 16) {

//     let columns = rows

//     for (i = rows;i > 0; i--) {
//         const container = document.querySelector('#container');
//         const squaresRow = document.createElement('div');
//         squaresRow.setAttribute('class', 'row');
//         squaresRow.setAttribute('style', 'background: #ffffff; display: flex; flex: 1;');
//         container.appendChild(squaresRow);
//     }
       
//     generateColumns(columns);

// }

// function generateColumns(columns) {

//     for (columns;columns > 0; columns--) {
//         const squaresRow = document.querySelectorAll('#container.row')
//         const squaresColumn = document.createElement('div');
//         squaresColumn.setAttribute('class', 'box')
//         squaresColumn.setAttribute('style', 'background: #ffffff; display: flex-basis: 0; border: 1px black solid;')
//         squaresRow.appendChild(squaresColumn);
//     }

// }

// generateRows(16);

function generateBoard(x = 16) {


    for (squares = x*x;squares > 0; squares--) {
    const container = document.querySelector('#container');
    const boxSize = 760 / x;
    const grid = document.createElement('div')
    grid.setAttribute('class', 'grid');
    grid.setAttribute('style', 'background: #ffffff;')
    grid.style.width = `${boxSize}px`
    container.appendChild(grid)
    }

}

generateBoard();