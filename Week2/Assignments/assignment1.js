let title=document.getElementById("title")
let close=document.querySelector(".close")

title.addEventListener("click",()=>
{ 
    title.textContent='Have a Good Time!';
}  
)

close.addEventListener("click",()=>{

    let list1=document.querySelector(".list");
    if(list1.style.display==='none'){

        list1.style.display="block";
    }
   

})