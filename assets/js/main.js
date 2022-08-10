let cellClick = document.querySelectorAll(".cell");
let dataSpans = document.querySelectorAll('[data-cell]');
const viningCombination = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]
const options = ["", "", "", "", "", "", "", "", ""]

let content;
cellClick.forEach(item => {
    item.addEventListener("click", (e) => {
        if (e.target.innerText == "") {
            if (content == "X") {
                let contentSpan = e.target.firstElementChild;
                contentSpan.innerText = "O"
                content = "O";
                let cellIndex = contentSpan.getAttribute("cellIndex");
                uptadeCell(cellIndex, content);
                checkWin();

            }
            else {
                let contentSpan = e.target.firstElementChild;
                contentSpan.innerText = "X";
                content = "X";
                let cellIndex = contentSpan.getAttribute("cellIndex");
                uptadeCell(cellIndex, content);
                checkWin();

            };
        }
    })
})
let checkWin = () => {
    let roundWon = false;
    for (const item of viningCombination) {
        const cellA = options[item[0]];
        const cellB = options[item[1]];
        const cellC = options[item[2]];
        if (cellA == "" || cellA == "" || cellC == "") {
            continue;
        };
        if (cellA === cellB && cellC === cellB) {
            roundWon=true;
        }    }
    if (roundWon==true) {
    console.log("win");
        
    }
};
let uptadeCell = (cellIndex, content) => {
    options[cellIndex] = content;
}


