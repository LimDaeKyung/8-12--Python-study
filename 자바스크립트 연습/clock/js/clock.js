// const clock = document.querySelector("h2#clock");

// function getClock() {
//   const date = new Date();
//   const days = String(date.getDay()).padStart(4,"0");
//   const hours = String(date.getHours()).padStart(2,"0"); // 2자리로 만들고 2자리가 아닐때 앞쪽에서부터 문자"0"을 2자리가 될때 까지 추가하는 방식.
//   const minutes = String(date.getMinutes()).padStart(2,"0");
//   const seconds = String(date.getSeconds()).padStart(2,"0");
//   clock.innerText = `${hours}:${minutes}:${seconds}`;
// }

// getClock();
// setInterval(getClock,1000); // 1초에 한번씩 반복.

const clock = document.querySelector("#clock");

function getClock() {
    const now = new Date(); // 현재 날짜 및 시간
    const christmas = new Date(now.getFullYear(), 11, 25, 0, 0, 0); // 올해 12월 25일 00:00:00
    
    // 크리스마스가 이미 지난 경우, 내년 크리스마스로 설정
    if (now > christmas) {
        christmas.setFullYear(now.getFullYear() + 1);
    }

    const timeDifference = christmas - now; // 밀리초 차이 계산

    // 밀리초를 일, 시간, 분, 초로 변환
    const days = String(Math.floor(timeDifference / (1000 * 60 * 60 * 24))).padStart(3, "0");
    const hours = String(Math.floor((timeDifference / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    const minutes = String(Math.floor((timeDifference / (1000 * 60)) % 60)).padStart(2, "0");
    const seconds = String(Math.floor((timeDifference / 1000) % 60)).padStart(2, "0");

    // 남은 시간을 h2 요소에 표시 (d:h:m:s 형식)
    clock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock, 1000); // 1초마다 반복 실행
