//Declare variables
let counter = 0

//Get elements that update (counter and previous entries)
let ctrTxt = document.getElementById("counterTxt")
let prevEntr = document.getElementById("prevEntries")

function increment(){
    counter += 1;
    ctrTxt.innerText = counter;
}

function save(){
    //Update previous counter txt
    let prevTxt = counter + " - "
    prevEntr.textContent += prevTxt

    //After saving, reset counter text and counter var
    ctrTxt.innerText = 0
    counter = 0
}

function reset(){
    //reset previous entries
    prevEntr.innerText = "Previous entries: "
    ctrTxt.innerText = 0
    counter = 0
}