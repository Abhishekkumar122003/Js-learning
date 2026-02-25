
async function github() {
    console.log("hello");
   try{ const Response = await fetch("https://api.github.com/users");
    if(!Response.ok){
    throw new Error("Data is not present");
   }
    const Data = await Response.json();

    const parents = document.querySelector(".first");

    for (const user of Data) {
        
       const element =  document.createElement('div');
       element.classList.add('user');
       
       
       const  image = document.createElement('img');
       image.src=user.avatar_url;
       
       const username = document.createElement('h2');
       username.innerText=user.login;

       const anchor = document.createElement('a')
       anchor.href = user.html_url
       anchor.textContent = 'Visite Profile'

       element.append(image, username, anchor);

       parents.append(element)



    }
}
 catch(error){
        console.log(error)
 }

}
github()