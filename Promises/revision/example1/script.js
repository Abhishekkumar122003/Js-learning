console.log(`Helloo jeeee`)

// const user = await fetch("https://api.github.com/users")
// console.log(user)


console.log("start");
const UserData = fetch('https://api.github.com/users');
UserData.then((response)=>{
    return response.json();
}).then((response)=>{
    const parents=document.querySelector(".box");
    for(let i=0; i<=response.length;i++){
    const image = document.createElement('img');
    image.style.height="90px"
    image.style.width="90px"
    image.src=response[i].avatar_url;
    parents.append(image);}

    console.log(response);
}).catch((error)=>{
    const parents=document.querySelector(".box");
    parents.textContent=error.message;
    
})

