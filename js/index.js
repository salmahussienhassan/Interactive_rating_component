const submitBtn = document.querySelector(".submit");
const listBtn = document.querySelectorAll("li");
const thanksBox = document.querySelector(".thanks");
const cardBox = document.querySelector(".Card");
const alertText = document.querySelector(".butn .alertText");

let rateNum = undefined;

for (let i = 0; i < listBtn.length; i++) {
    listBtn[i].addEventListener("click", function () {
        rateNum = this.innerHTML;
        for (let j = 0; j < listBtn.length; j++) {
            if (j !== i) {
                listBtn[j].classList.remove("selected-color");
            }
        }

        listBtn[i].classList.add("selected-color");
    });
}

submitBtn.addEventListener("click", ()=> {
    if (rateNum === undefined) {
        alertText.classList.replace("d-none", "d-block");
        return;
    } else {
        alertText.classList.replace("d-bock", "d-none");
        cardBox.classList.add("d-none");

        thanksBox.classList.replace("d-none", "d-block");
        thanksBox.classList.add("animate__animated", "animate__fadeInRight");

        document.querySelector(".number").innerHTML = rateNum;
    }
});
