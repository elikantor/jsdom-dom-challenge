let counter = document.getElementById("counter")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let like = document.getElementById("heart")
let likeClass = document.querySelector(".likes")
let pause = document.getElementById('pause')
let submit = document.getElementById("submit")

function startStopTimer(bool){
    if (bool) {
        timer = setInterval(function(){ counter.innerText++}, 1000)
    } else {
        clearInterval(timer)
    }
}
startStopTimer(true)

pause.addEventListener("click", function(e) {
    if (pause.innerText === "pause") {
        pause.innerText = "resume"
        startStopTimer(false)
        plus.disabled = true
        minus.disabled = true
        like.disabled = true
        submit.disabled = true
    } else if (pause.innerText === "resume") {
        pause.innerText = "pause"
        startStopTimer(true)
        plus.disabled = false
        minus.disabled = false
        like.disabled = false
        submit.disabled = false
    }
})

plus.addEventListener("click", function(e) {
    counter.innerText++
})

minus.addEventListener("click", function(e) {
    counter.innerText--
})

let timeCounter
like.addEventListener("click", function(e) {
    let y = document.getElementById(`${counter.innerText}`)
    if(y) {
        timeCounter += 1
        document.getElementById(`${counter.innerText}`).innerHTML = `${counter.innerText} has been liked <span> ${timeCounter} </span> times`
    } else {
        let li = document.createElement('li')
        li.id = counter.innerText
        li.innerHTML = `${counter.innerText} has been liked <span> 1 </span> time`
        likeClass.appendChild(li)
        timeCounter = 1
    }
})

submit.addEventListener("click", function(e) {
    e.preventDefault()
    let comments = document.querySelector(".comments")
    let comment = document.getElementById("comment-input")
    comments.innerHTML += `<p>${comment.value}</p>` 
})





