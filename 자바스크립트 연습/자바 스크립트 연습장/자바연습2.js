const h1 = document.querySelector("div.hello:first-child h1");

// 같은 행위를 코드 한줄로도 사용 가능
function handleTitleClick() {
    h1.classList.toggle("active"); // 토글은 기본적으로 클래스 리스트에 클래스 네임이 있으면 삭제하고, 없으면 추가하는 방식을 수행
} 
// function handleTitleClick(){ 
//     const activeClass = "active";
//     if (h1.classList.contains(activeClass)){
//         h1.classList.remove(activeClass);
//     } else{
//         h1.classList.add(activeClass);
//     }
// }

h1.addEventListener("click",handleTitleClick);





// if문 활용해서 누를때 마다 색이 바뀌게끔 설정. 하지만 스타일 변경은 css에서 다루는 것이 좋고 애니메이션 같은 경우를 js에서 다루는것이 좋다.
// function handleTitleClick(){
//     const currentColor = h1.style.color;
//     let newColor;
//     if(currentColor==="blue") {
//         newColor = "tomato";
//     }else{
//         newColor = "blue";
//     }; 
//     h1.style.color = newColor
// };