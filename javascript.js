let i=0;
let j=0;

let container = document.querySelector(".container");

//function to build the divs in the grid

function makeGrid(gridLength){
    for(i=1;i<=gridLength;i++)
        for(j=1;j<=gridLength;j++)
        {
            let square=document.createElement('div');
            square.style.border='.1rem solid rgb(36, 94, 148)';
            let width=container.clientWidth/gridLength;
            let height=container.clientHeight/gridLength;
            square.style.width=`${width}px`;
            square.style.height=`${height}px`;
            container.appendChild(square);
            square.classList.add('square');
        }
}

// run with 16x16 when user enters webpage

makeGrid(16);

// make a new grid using

function colorSquare(){
    let squares=document.querySelectorAll('.square');
    console.log(squares);
    squares.forEach( square => {
        square.addEventListener('mouseenter', changeColor);
    });
    function changeColor(e){
        e.target.style.backgroundColor='rgb(184, 59, 37)';
    }
}    

colorSquare();


let button=document.querySelector('button');
button.addEventListener('click', newGrid);

function newGrid(){
    let gridLength=parseInt(prompt("How many rows do you want the grid to have? No more than 50, or it might freeze."));
    while(container.firstChild)
        container.removeChild(container.firstChild);
    makeGrid(gridLength);
    colorSquare();
    }










    
