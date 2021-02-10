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
    if(input1.value.length == 4){
        text.innerText = "Fine";
    }
    if(input1.value.length >= 5){
        text.innerText = "Good";
    }
    if(input1.value.length == 15){
        text.innerText = "Very Good";
    }
    if(input1.value.length > 25){
        text.innerText = "I Like";
    }
    
});


let sum = document.querySelector('.h3');
sum.innerText = 0;

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
});

let h22 = document.querySelector('.h2');
h22.innerText = '0';
document.body.append(h22);
let fo = document.querySelector('#two');
let go = document.querySelector('#tree');
fo.style.marginBottom = '45px'
let step = document.querySelector('.step');
let ost = document.querySelector('.ost');
let del = document.querySelector('.del');

step.addEventListener('click', function(){
    h22.innerText = Number(fo.value) ** Number(go.value)
});
ost.addEventListener('click', function(){
    h22.innerText = Number(fo.value) % Number(go.value);
});
del.addEventListener('click', function(){
    h22.innerText = Number(fo.value) / Number(go.value)
})

