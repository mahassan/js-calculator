const firstInput = document.getElementById('firstTextField');
const secondInput = document.getElementById('secondTextField');
const sum = document.getElementById('sum');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');

firstInput.value = 8;
secondInput.value = 6;


add.addEventListener("click", ()=>{
    sum.innerText = Number(firstInput.value) +  Number(secondInput.value);
})
subtract.addEventListener("click", ()=>{
    sum.innerText = Number(firstInput.value) -  Number(secondInput.value);
})
multiply.addEventListener("click", ()=>{
    sum.innerText = Number(firstInput.value) *  Number(secondInput.value);
})
divide.addEventListener("click", ()=>{
    const floating = Number(firstInput.value) / Number(secondInput.value);
    sum.innerText = floating.toFixed(2)
})