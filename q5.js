window.addEventListener('DOMContentLoaded',()=>{
    var t1=document.querySelector("#t1");
    var msg=document.querySelector("#msg");
    var b1=document.querySelector("#b1");

    b1.addEventListener('click',()=>{
        msg.innerHTML=t1.value;
    });
});