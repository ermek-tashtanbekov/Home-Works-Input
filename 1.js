let h2 = document.createElement('h2');
h2.innerText = 'Example #1';
document.body.before(h2);

let text = document.createElement('h5');
text.innerText = ' ';
document.body.before(text);

let input1 = document.querySelector('#full');
input1.style.marginRight = '150px';
input1.style. marginBottom = '40px'
input1.addEventListener('keydown', function(event){
    if(input1.value.length == 0){
        text.innerText = "Fine";
    }
    if(input1.value.length >= 5){
        text.innerText = "Good";
    }
    if(input1.value.length == 10){
        text.innerText = "Very Good";
    }
    if(input1.value.length > 15){
        text.innerText = "I Like";
    }
    
});

let sum = document.createElement('h3');
sum.innerText = 0;
document.body.append(sum);
let a = document.querySelector('#num1')
let b = document.querySelector('#num2');
let ninus = document.querySelector('.btn1');
ninus.innerText = '-';
let plus = document.querySelector('.btn2');
plus.innerText = '+';

plus.addEventListener('click', function(event){
    sum.innerText = Number(a.value) + Number(b.value)
    
});
ninus.addEventListener('click', function(event){
    sum.innerText = Number(a.value) - Number(b.value)
})



