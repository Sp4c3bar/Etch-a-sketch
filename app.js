console.log("It's working!")

const drawingBoard = document.querySelector('.board');

gridSize = 4

// const grid = document.createElement('div')

function createGridOf(numBox) {
    drawingBoard.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    drawingBoard.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    //rows.style.gridRow = `span 1`;
    document.querySelectorAll('.row').forEach(el => el.gridColumn = 'span 1');

    console.log(gridSize)

    let counter = 0
    for (let i = 0; i < numBox; i++) {
        const row = drawingBoard.appendChild(document.createElement('div'));
        row.className = "row"
        for (x = 0; x < numBox; x++) {
            const column = row.appendChild((document.createElement('div')));
            column.classList.add('box', `number${counter + 1}`,`column${x + 1}`) 
            counter += 1
            // console.log(counter)
           //  console.log(pixelText[counter])
            
        

            
        }
        
    }
}

createGridOf(gridSize)

const boxes = document.querySelectorAll(".box")

function addNumberToBoxes() {
    i = 1;
    boxes.forEach(element => {
        element.textContent = i;
        i += 1; 
    });
}

addNumberToBoxes();

function addClickToBoxes() {
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            console.log("make it Shake")
        })
    })
}

addClickToBoxes();





// functions
// 1. create grid size based on user input
// 2. change color of input
// 3. draw when clicked


console.log(boxes)