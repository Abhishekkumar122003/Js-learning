

// fetch("https://api.github.com/users")
// .then((reponse)=>{
//     return reponse.json();
// })
// .then((data)=>{
//     console.log(data)
//     const parents = document.getElementsByClassName("first");
//     for(let i=0;i<=data.length;i++){
//     const image = document.createElement('img');
//     // image.style.height="100px";
//     // image.style.width="100px";
//     image.src= data[i].avatar_url;

//     // parents.append(image);
//     }
// })

 

fetch("https://api.github.com/users")
.then((response)=>{
    
    return response.json();
}
)
.then((data)=>{
    // console.log(data);
    const first_parent = document.querySelector(".first")
    for(let i=0;i<=(data.length-1);i++){
    const img = document.createElement('img');
    img.src=data[i].avatar_url;
    first_parent.append(img);}
    
})
.catch((error)=>{
    const parents= document.querySelector(".first");
    parents.textContent=error.message;
})