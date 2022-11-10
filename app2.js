//Staff Page JavaScript
const panels = document.querySelectorAll('.panel');
//console.log(panels);
panels.forEach((panels)=>{
    panels.addEventListener('click', () =>{
        removeActiveClass()
        panels.classList.add('active')
    })
})
function removeActiveClass(){
    panels.forEach(panels=>{
        panels.classList.remove('active')
    })
}

//Overlays functions for active class
const overlays = document.querySelectorAll('.overlay');
// console.log(overlays);
overlays.forEach((overlays) =>{
    overlays.addEventListener('click', ()=>{
        removeActiveOverlay()
        overlays.classList.add('active')
    })
    if(overlays === 'active'){
        addActiveOverlay()
    }else{
        removeActiveOverlay()
    }
})
function removeActiveOverlay(){
    overlays.forEach(overlays =>{
        overlays.classList.remove('active')
    })
}
function addActiveOverlay(){
    overlays.forEach(overylays =>{
        overlays.classList.add('active')
    })
}