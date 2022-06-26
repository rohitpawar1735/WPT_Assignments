window.addEventListener('DOMContentLoaded',()=>{
    var t1=document.querySelector("#email");
    var t2=document.querySelector("#password");
    var t3=document.querySelector("#location");
    var r=document.querySelector("#register");
    var l=document.querySelector("#login");
    var msg=document.querySelector("#msg");

    r.addEventListener('click',()=>{
        if(t1.value=="a" && t2.value=="b" && t3.value=="c"){
            console.log("Register button clicked");
            msg.innerHTML="Registration Fails";
        }
        else{
            console.log("Register button clicked");
            msg.innerHTML="Registration Suceeded";

        }
    });


    l.addEventListener('click',()=>{
        console.log("Login button clicked");
    });
});