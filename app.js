console.log("It's working!")

const drawingBoard = document.querySelector('.board')


// const grid = document.createElement('div')

function createGridOf(numBox) {
    let counter = 0
    for (let i = 0; i < numBox; i++) {
        const row = drawingBoard.appendChild(document.createElement('div'));
        row.className = "row"
        for (x = 0; x < numBox; x++) {
            const column = row.appendChild((document.createElement('div')));
            column.classList.add('box', `number${counter + 1}`,`column${x + 1}`) 
            counter += 1
            console.log(counter)
            const pixelText = document.querySelector(`.box`)
            pixelText.textContent += "hello"

            
        }
    }
}


createGridOf(4)