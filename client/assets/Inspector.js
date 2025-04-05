const targetElement = document.querySelector('.intros');
console.log(targetElement)
const observer = new IntersectionObserver((observers)=>{
observers.map((observe)=>{
    console.log(observe)
})
})

observer.observe(targetElement);