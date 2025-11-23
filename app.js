const btn = document.createElement("a") 
btn.id = "scroll-btn";
btn.textContent = "Home";
btn.style.display = "none"; 
btn.style.position = "fixed";
btn.style.bottom = "60px";
btn.style.left = "60px" ;
btn.href="#hero";
btn.style.padding ="10px 20px";
btn.style.backgroundColor= "#577b81";
btn.style.color = "#ffffffff";
btn.style.borderRadius = "8px";
btn.style.textDecoration= "none";
btn.style.cursor="pointer";
btn.style.border= "4px solid #233c40";
btn.style.fontWeight="bold";



document.body.appendChild(btn); 



function scrollFunc (){
    if( window.scrollY > 200){
        (btn.style.display ="block");
    } else {
        (btn.style.display ="none");
    }
}


window.addEventListener("scroll", scrollFunc);
