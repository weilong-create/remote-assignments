const button=document.getElementById("submit")
const content=document.getElementById("name")
const result=document.getElementById("result")
let num;
button.addEventListener("click",function(){
    num=content.value;
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status===200){
    document.getElementById('result').innerHTML=`result:${xhr.responseText}`
    }
    }
    xhr.open('GET',`http://localhost:3000/data?number=${num}`)
    xhr.send();
})


