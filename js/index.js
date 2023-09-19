// dom elemnts
const submitBtn=document.querySelector('.submit')
const listBtn=document.querySelectorAll('li')

const thanksBox=document.querySelector('.thanks')
const cardBox=document.querySelector('.Card')
console.log(cardBox)
// variables
let rateNum=undefined;

// events

for(let i=0;i<listBtn.length;i++){

    listBtn[i].addEventListener('click',function(e){

        rateNum=e.target.innerHTML;
        for (let j = 0; j < listBtn.length; j++) {
            if (j !== i) {
              listBtn[j].classList.remove('selected-color');
            }
        }
console.log(e.target.innerHTML);
    listBtn[i].classList.add('selected-color')


    })
}

submitBtn.addEventListener('click',function(){
    if(rateNum===undefined)
    {
        return
    }
    else{
        
        cardBox.classList.add("d-none")
      
        thanksBox.classList.replace('d-none','d-block')
        // thanksBox.classList.add("animate__animated","animate__fadeInRight")
       document.querySelector('.number').innerHTML=rateNum
      
    }
    
   
})

// function
