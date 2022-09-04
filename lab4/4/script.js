let row = 1;

const calculate = () => {
    let number = document.getElementById("input").value;
    let parent = document.getElementById("container");
    parent.innerHTML = ""
    for (let col = 1; col <= number; col++) {
        if (col % 9 == 0) { number++ }
        create(col);
    }
}

const create = (col) => {
    let number = document.getElementById("input").value;
    let parent = document.getElementById("container");
    let item1 = document.createElement("div");
    let item2 = document.createElement("div");
    item1.classList.add("item1");
    item2.classList.add("item2");
    if (col % 9 == 0) {
        row++;
        col = 1;
    }
    else if (col % 2 == 1) {
        col++;
        parent.appendChild(item1);
    }
    else if (col % 2 == 0) {
        col++;
        parent.appendChild(item2);
    }
    if (col == 16) {
        parent.appendChild(item1);
    }
}