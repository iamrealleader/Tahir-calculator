let string = "";
let btns = document.querySelectorAll('.btns');
let input = document.querySelector('.input');

Array.from(btns).forEach((hello)=>{
     hello.addEventListener('click', (hi)=>{
        if(hi.target.innerHTML == '='){
           string = eval(string);
           input.value = string;
        }
        else if(hi.target.innerHTML == 'C'){
           string = "";
           input.value = string;
        }
        else{
        string = string + hi.target.innerHTML;
        input.value = string;
        }
     })
})