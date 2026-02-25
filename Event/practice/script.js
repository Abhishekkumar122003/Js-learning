//This is first Method to add Event 
// function handleclick(){
//     const first = document.querySelector(".first");
//     first.textContent=`Hello jee this line has been clicked now `

// } 


//This is second method to add Event 
// const second = document.querySelector('.second');
// second.onmouseleave= function handleEvent(){
// second.textContent= `now this is "onmouseleave" event`
// }

// second.onmouseleave= function handleclick1(){
//     second.textContent=`I am the best in the world enev though i don't belieav it `
// } //see it overwrite the event handleEvent by the handelEvent1 


// Sooo we use the thrid method 
const third = document.querySelector('.third');
    third.addEventListener('mouseleave', ()=>{
    third.textContent='tenu ke shmjhaba paji ki aai third method hai';
})

third.addEventListener('mouseleave',()=>{
    third.style.background="brown";
})