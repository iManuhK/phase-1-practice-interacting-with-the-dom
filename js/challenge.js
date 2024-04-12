document.addEventListener('DOMContentLoaded', (e)=>{
       let timer = setInterval(startCount, 1000)
        let counter = document.getElementById("counter")
function startCount(){
    counter.innerHTML = `\n ${timer}\n`
    timer++
}
function pauseTimer(){
    let pauseBtn = document.getElementById("pause")
    pauseBtn.addEventListener('click', (e)=>{
        let currentTime = document.getElementById('counter')
        clearInterval()
        })
}

function IncDecrManually () {
let decrementer = document.getElementById("minus")
decrementer.addEventListener('click',()=>{
counter.innerHTML = timer--
    })
let Incrementer = document.getElementById("plus")
Incrementer.addEventListener('click',()=>{
    counter.innerHTML = timer++
    })
}
IncDecrManually()
function LikingCounter(){
    let liker = document.getElementById("heart")
    liker.addEventListener('click', (e)=>{
let messageLine = document.createElement('li')
messageLine.innerHTML = `${counter.innerText} has been liked 1 time`
document.getElementsByClassName('likes')[0].appendChild(messageLine)
    })

}

function Addcomments(){
    
    const form = document.getElementById("comment-form")
    form.addEventListener('submit', (e)=>{
       e.preventDefault()
       let inputButton = document.getElementById('comment-input')
       let p = document.createElement('p')
       p.innerHTML = inputButton.value
       document.getElementById('list').appendChild(p)
       form.reset()
    })
}
Addcomments()
pauseTimer()
LikingCounter()
})
