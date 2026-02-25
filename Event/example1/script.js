// function handleContent(){ 
//     const head = document.getElementById('first');
//     head.textContent="hello Abhishek";
// }
// this method is also not used
// const content = document.querySelector("#first")
// content.onclick =function handleClick(){
//     content.textContent = "Hey Abhishek this is the second way to create a event"
// }

// this method is used currently

//  const head = document.getElementById('first');
//  head.addEventListener('click', ()=>{
//         head.textContent='this method is use currently';
//  })
//  head.addEventListener('click', ()=>{
//         head.style.backgroundColor="pink";
//  })

//  const parents = document.querySelector('.parents');
// console.log(parents.children);

// for(let child of parents.children){
//     console.log(child);
//     child.addEventListener('click', ()=>{
//           child.textContent='I am clicked';
//     })
    
// }

const box = document.querySelector('.grandParent');
function handleClick(e) {
       e.target.textContent= "I am have been clicked " ;
       box.removeEventListener('click', handleClick)
}
box.addEventListener("click", handleClick)