const resultContainer = document.querySelector("#result-container");
const resultParagraph = document.querySelector("#result");
const userChoiceSpan = document.querySelector("#user-choice");
const machineChoiceSpan = document.querySelector("#machine-choice");
const maxNumberInput = document.querySelector("#max-number");
const userGuessInput = document.querySelector("#user-guess");
const startButton = document.querySelector("#start-btn");

function generateRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));  // 0부터 max까지 포함
}

function showResult(userGuess, machineGuess) {
    // 선택한 번호와 컴퓨터가 선택한 번호를 화면에 표시
    userChoiceSpan.textContent = userGuess;
    machineChoiceSpan.textContent = machineGuess;

    // 승패 결과 표시
    if (userGuess === machineGuess) {
        resultParagraph.innerHTML = `<strong>You won!</strong>`;
    } else {
        resultParagraph.innerHTML = `<strong>You lost!</strong>`;
    }

    // 결과 컨테이너를 표시
    resultContainer.classList.remove("hidden");
}

function onGuessSubmit() {
    // 입력된 값 가져오기
    const userGuess = parseInt(userGuessInput.value, 10);
    const maxNumber = parseInt(maxNumberInput.value, 10);

    if (isNaN(maxNumber) || maxNumber <= 0) {
        alert("Please enter a valid maximum number.");
        return;
    }

    if (isNaN(userGuess) || userGuess < 0 || userGuess > maxNumber) {
        alert(`Please enter a number between 0 and ${maxNumber}.`);
        return;
    }

    // 컴퓨터의 랜덤 번호 생성 및 결과 표시
    const randomNumber = generateRandomNumber(maxNumber);
    showResult(userGuess, randomNumber);
}

// Play 버튼 클릭 시 게임 실행
startButton.addEventListener("click", onGuessSubmit);
