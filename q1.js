window.addEventListener('DOMContentLoaded',()=>{
    var t1=document.querySelector("#t1");
    var t2=document.querySelector("#t2");
    var b1=document.querySelector("#b1");
    var b2=document.querySelector("#b2");
    var b3=document.querySelector("#b3");
    var b4=document.querySelector("#b4");
    var msg=document.querySelector("#Msg");
    

    b1.addEventListener('click',()=>{
        var a1=(parseInt(t1.value)) + (parseInt(t2.value));
        msg.innerHTML=a1;
    });

    b2.addEventListener('click',()=>{
        var a2=t1.value-t2.value;
        msg.innerHTML=a2;
    });

    b3.addEventListener('click',()=>{
        var a3=t1.value*t2.value;
        msg.innerHTML=a3;
    });

    b4.addEventListener('click',()=>{
        var a4=t1.value/t2.value;
        msg.innerHTML=a4;
    });
});