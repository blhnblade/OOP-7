const leftCont = document.querySelector('.selection__left-section');
const rightCont = document.querySelector('.selection__right-section');
const paragraphs = document.querySelectorAll('p')

for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].addEventListener('click', function(e){
        this.classList.toggle('_active');
    })
}

rightCont.addEventListener('click', function(){
    let temp = leftCont.querySelectorAll('p');
    for(let i = 0; i < temp.length; i++){
        temp[i].classList.remove('_active');
    }
})

leftCont.addEventListener('click', function(){
    let temp = rightCont.querySelectorAll('p');
    for(let i = 0; i < temp.length; i++){
        temp[i].classList.remove('_active');
    }
})

const btnFi = document.querySelector('#first-btn');
const btnSe = document.querySelector('#second-btn');
const btnTh = document.querySelector('#third-btn');
const btnFo = document.querySelector('#fourth-btn');


btnFi.addEventListener('click', function(){
    if(leftCont.querySelector('._active')){
        let mas = leftCont.querySelectorAll('._active');
        console.log(mas)
        mas.forEach((el)=>{
            el.classList.remove('_active');
            el.remove();
        });
        mas.forEach((el)=>{rightCont.append(el)})
    }
});
btnSe.addEventListener('click', function(){
    let mas = leftCont.querySelectorAll('p');
    mas.forEach((el)=>{
        el.remove();
        el.classList.remove('_active');
        rightCont.append(el);
    })
});
btnTh.addEventListener('click', function(){
    if(rightCont.querySelector('._active')){
        let mas = rightCont.querySelectorAll('._active');
        console.log(mas)
        mas.forEach((el)=>{
            el.classList.remove('_active');
            el.remove();
        });
        mas.forEach((el)=>{leftCont.append(el)})
    }
});
btnFo.addEventListener('click', function(){
    let mas = rightCont.querySelectorAll('p');
    mas.forEach((el)=>{
        el.remove();
        el.classList.remove('_active');
        leftCont.append(el);
    })
});