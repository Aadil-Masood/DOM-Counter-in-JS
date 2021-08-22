function increment (){
    let countEl = document.getElementById ("count");
    let currentcount = countEl.innerText;
    let updatedcount =parseInt(currentcount) + 1;
    countEl.innerHTML = updatedcount;
}

function decrement () {
    let countEl = document.getElementById ("count");
    let currentcount = countEl.innerText;
    let updatedcount =parseInt(currentcount) - 1;
    countEl.innerHTML = updatedcount;

}

function reset () {
    let countEl = document.getElementById ("count");
    countEl.innerHTML = 0;
}