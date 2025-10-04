document.addEventListener('DOMContentLoaded',()=>{
    let type=document.querySelector('#typing');
    let roles=['Software Developer','Web Developer','FrontEnd Developer','BackEnd Developer','FullStack Developer','Tech Enthusiastic']
    let i=1;
    setInterval(() => {
        type.innerHTML=roles[i++]
        if(i>=roles.length)
            i=0
    }, 2000);
})

// https://rajaprerak.github.io/index.html
// https://arasgungore.github.io/index.html
// https://www.abusaid.me/#about
// https://jigarsable.netlify.app/