window.addEventListener('DOMContentLoaded',()=>{
    var t1=document.querySelector("#t1");
    var b1=document.querySelector("#b1");
    var msg=document.querySelector("#msg");

    b1.addEventListener('click',()=>{
        if(t1.value%2==0){
            msg.innerHTML="Number is Even";
            t1.style.borderColor="blue";
        }
        else{
            msg.innerHTML="Number is Odd";
            t1.style.borderColor="red";
        }
    });
});