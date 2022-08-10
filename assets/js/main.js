let cellClick = document.querySelectorAll(".cell");
let dataSpans = document.querySelectorAll('[data-cell]');
const viningCombination = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]
let content;
cellClick.forEach(item => {
    item.addEventListener("click", (e) => {
        if (e.target.innerText == "") {
            if (content == "X") {
                e.target.firstElementChild.innerText = "O"
                content = "O";
                if (checkWin(content)) {
                    console.log("vin");
                }
            }
            else {
                e.target.firstElementChild.innerText = "X";
                content = "X";
                if (checkWin(content)) {
                    console.log("vin");
                }
            };
        }
    })
})
let checkWin = (content) => {

    return viningCombination.some(
        combination=>{
            return combination.every(index=>{
                return dataSpans[index].innerHTML=content;
            })
        }
    )
};


