document.addEventListener('DOMContentLoaded', (e)=>{
    const counterElement = document.getElementById('counter')

    let counterValue = 0
  
    const pauseButton = document.getElementById('pause')
  
    const resumeButton = document.getElementById('resume')
  
    let intervalId = setInterval(startCount, 1000);
  
    function startCount() {
      counterValue += 1;
      counterElement.innerHTML = counterValue;
    }
  
    function resume() {
      intervalId = setInterval(startCount, 1000);
      pauseButton.style.display = '';
      resumeButton.style.display = 'none';
  
    }
    function pause() {
      clearInterval(intervalId);
      pauseButton.style.display = 'none';
      resumeButton.style.display = '';
      let allBtns = document.querySelectorAll('button')
      allBtns.forEach(button => {
        button.disabled = true
        resumeButton.disabled = false
        pauseButton.disabled = false
      });
      //document.getElementById('minus').disabled = true
    }
    pauseButton.addEventListener("click", (e) => {
      pause()
    })
    resumeButton.addEventListener("click", (e) => {
      resume()
      let allBtns = document.querySelectorAll('button')
      allBtns.forEach(button => {
        button.disabled = false
      })
    })
     
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

function IncDecrManually () {
let decrementer = document.getElementById("minus")
decrementer.addEventListener('click',()=>{
counter.innerHTML = counterValue--
    })
let Incrementer = document.getElementById("plus")
Incrementer.addEventListener('click',()=>{
    counter.innerHTML = counterValue++
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
Addcomments()
LikingCounter()
})
