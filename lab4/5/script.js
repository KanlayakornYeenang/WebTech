let order = [["ก๋วยเตี๋ยวเรือ", 0], ["ราเมน", 0], ["จาจังมยอน", 0]];

const addOrder = (menu) => {
    let parent = document.getElementById("list");
    let addFood = document.createElement("li");
    addFood.classList.add("list-group-item");
    let addNumber = document.createElement("div");
    addNumber.classList.add("float-right");
    for (let i = 0; i < 3; i++) {
        if (menu == i) {
            order[i][1]++;
            if (order[i][1] == 1) {
                addNumber.setAttribute('id', "food"+i);
                addNumber.innerText = "x"+order[i][1]
                addFood.appendChild(document.createTextNode(order[i][0]))
                addFood.appendChild(addNumber)
                parent.appendChild(addFood)
            }
            else {document.getElementById("food"+i).innerText = "x"+order[i][1];}
        }
    }
}