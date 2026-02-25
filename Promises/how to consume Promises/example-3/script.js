// server hmesa response kerta hai (fullfilled ) krta hai
// server kb "REJECT" krta hai, condition-> 1. Internet down 2. Server Down 3. DNS Down(it convert the url into IP Address)
fetch("https://api.github.com/users")
.then((response)=>{
    if(!response.ok){
        throw new Error("Data is not present in server")
    }
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