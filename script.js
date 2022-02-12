const cursor=document.querySelector('.cursor');
document.addEventListener('mousemove',e=>
{
    cursor.setAttribute("style","top:"+(e.pageY-35)+"px; left:"+(e.pageX-35)+"px;")
})
document.addEventListener('click',()=>{
    cursor.classList.add("expand");
    console.log("Clicked");
    setTimeout(()=>{
        cursor.classList.remove("expand");
    },500);
})
const buttons=document.querySelectorAll('button.read');
console.log(buttons);
buttons.forEach(btn=>{
    btn.addEventListener('click',function(e)
    {

        let x=e.clientX-e.target.offsetLeft;
        let y=e.clientY-e.target.offsetTop;
        let ripples=document.createElement('span');
        ripples.classList='ripple';
        ripples.style.left=x+'px';
        ripples.style.top=y+'px';
        this.appendChild(ripples);
         setTimeout(()=>{
             ripples.remove();
        },1000)
    })
})
