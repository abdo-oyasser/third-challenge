let submit = document.querySelector(".btn button")
let rates = document.querySelectorAll(".rates .rate")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let rating = document.querySelector(".rating")
let select = document.querySelector(".select")
let thanks = document.querySelector(".thanks")

rates.forEach((ele) => {
    ele.onclick = () => {
        rates.forEach((element) => {
            element.classList.remove("active")
        })
        ele.classList.add("active")
    }
})
function checkRate() {
    let num = 100
    if (one.classList.contains("active")) {
        num = 1
    }
    else if (two.classList.contains("active")) {
        num = 2
    }
    else if (three.classList.contains("active")) {
        num = 3
    }
    else if (four.classList.contains("active")) {
        num = 4
    }
    else if (five.classList.contains("active")) {
        num = 5
    }
    else {
        num = 0
    }
    return num
}
submit.onclick = () => {
    checkRate()
    if (checkRate() !== 0) {
        rating.style.display = "none"
        thanks.style.display = "flex"
        select.innerHTML = `You selected ${checkRate()} out of 5`
    }
}
