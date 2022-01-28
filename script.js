const cursor=document.querySelector('.cursor');
document.addEventListener('mousemove',e=>
{
    // console.log(e);
    cursor.setAttribute("style","top:"+(e.pageY-35)+"px; left:"+(e.pageX-35)+"px;")
})
document.addEventListener('click',()=>{
    cursor.classList.add("expand");
    console.log("Clicked");
    setTimeout(()=>{
        cursor.classList.remove("expand");
    },500);
})