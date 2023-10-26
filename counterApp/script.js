const db = document.getElementById("decrementBtn");
const ib = document.getElementById("incrementBtn");
const dv = document.getElementById("displayValue");
const rst = document.getElementById("resetBtn");


db.addEventListener("click", () => {
    let newiv = Number(dv.innerText) - 1;
    dv.innerText = newiv;
    //console.log(newiv);
});
ib.addEventListener("click", () => {
    let newiv = Number(dv.innerText) + 1;
    dv.innerText = newiv;
});
rst.addEventListener("click", () => {
    dv.innerText = 0;
});