//js에서 html의 정보를 가져올수 있게 되었다.
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    console.log("title was clicked!");
    h1.style.color ="blue"
};

function handleMouseEnter(){
    h1.innerText = "mouse is here";
};

function handleMouseLeave(){
    h1.innerText = "mouse is gone";
};

function handleResize(){
    document.body.style.backgroundColor ="tomato";
};

function handleCopy(){
    alert("Copier!")
};



h1.addEventListener("click",handleTitleClick); // 타이틀을 클릭했을 경우 어떤 함수를 실행 하려하는지.
h1.addEventListener("mouseenter",handleMouseEnter); //타이틀 위에 마우스를 갖다 댔을시에
h1.addEventListener("mouseleave",handleMouseLeave); 
window.addEventListener("resize",handleResize); 
window.addEventListener("copy",handleCopy); 
