window.addEventListener('DOMContentLoaded',()=>{
    var t1=document.querySelector("#t1");
    var b1=document.querySelector("#b1");
    var b2=document.querySelector("#b2");
    var msg=document.querySelector("#Msg");

    b2.addEventListener('click',()=>{
        var val=t1.value;
        var a="";
        for(let i=val.length;i>=0;i--){
             a=a+val.charAt(i);
             msg.innerHTML=a;
        }
    });


    b1.addEventListener('click',()=>{
        var val=t1.value;
        var a="";
        for(var i=val.length;i>=0;i--){
             a=a+val.charAt(i);
        }
        if(t1.value===a){
            msg.innerHTML="Value is Palindrome";
        }
        else{
            msg.innerHTML="Value is Not Palindrome";
        }
    });
});