let ul = document.querySelector('ul');
let inputText = document.querySelector('input');
let boton = document.querySelector('button');

boton.addEventListener('click',function(){

    if(inputText.value!=""){
        let li = document.createElement('li');
    let p = document.createElement('p');
    p.textContent= inputText.value;
    
    let divp = document.createElement('div');
    divp.appendChild(p);
    li.appendChild(divp);
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.src = "img/boton-v.png";
    let img2 = document.createElement('img');
    img2.src = "img/boton-x.png";
    div.appendChild(img);
    div.appendChild(img2);

    li.appendChild(div);
    ul.appendChild(li);
    inputText.value="";

    img2.addEventListener('click', function(){
        ul.removeChild(li);
    })

    img.addEventListener('click', function(){
        li.classList.toggle('activado');
        console.log(li.classList);
        
    })
    }

});

