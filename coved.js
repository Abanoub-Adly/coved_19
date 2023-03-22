let ul=document.getElementById("ul");
let menu=document.getElementById("open-menu");
let closeMenu=document.getElementById("close-menu");
let Time=document.getElementById("time");
let time=new Date();
Time.appendChild(document.createTextNode(time.getFullYear()))
function openMenu(){
    ul.style.cssText="left:0";
    menu.style.cssText="display:none"
    closeMenu.style.cssText="display:block"
}
function hideMenu(){
    ul.style.cssText="left:-100%";
    menu.style.cssText="display:inline-block"
    closeMenu.style.cssText="display:none"
}
