let h2 = document.createElement('h2');
h2.innerText = 'Example #1';
document.body.before(h2);

let text = document.createElement('h5');
text.innerText = ' ';
document.body.append(text);

let input1 = document.querySelector('#full');
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
    
});