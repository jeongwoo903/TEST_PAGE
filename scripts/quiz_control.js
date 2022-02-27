//const ulElem = document.querySelector("ul.content_wrapper");
// 페이지 보여주기
ulElem.childNodes[0].classList.add("show");
// 버튼 누르면 앞으로 가기
const btn = document.querySelectorAll(".btn");
let btn_wrapper = document.querySelectorAll(".button_wrapper");
// 버튼 누르면 뒤로 가기
const btn_back = document.querySelector("button.back");
// 페이지 수 세기 -> 1이하가 안되게끔..
let count = 1;
const counter = document.querySelector("p.count");
counter.innerHTML = `${count}/${quiz_data.length}`;
// 페이지 게이지
let gauge = 0;
const gaugebar = document.querySelector("div.gauge");
gaugebar.style.width = `${gauge += 100 / quiz_data.length}%`;

function setPage() {
    let parentBtn = btn_wrapper[count - 1];
    if (count < quiz_data.length) {
        for (const childBtn of parentBtn.children) {
            childBtn.classList.add(`page${count}`);
        }
    }
} setPage();

function btnControl(e) {
    let tg = e.target;
    console.log(count);
    let currentItem = document.querySelector(`.page${count}.check`);

    // 선택지 다시 고르기
    if (currentItem) {
        currentItem.classList.remove("check");
    }
    // 선택지 고르기 -> 여기 부분 수정 page 값 가지도록 영역 수정
    if (tg.classList.contains("btn")) {
        // 이전 퀴즈 감추기
        ulElem.childNodes[count - 1].classList.remove("show");
        // 카운터 증가
        count++;
        counter.innerHTML = `${count}/${quiz_data.length}`;
        setPage();
        // btn_wrapper의 재 정의 -> 다음 page의 addEventListener가 적용이 안됨.
        // btn_wrapper = document.querySelector(`li:nth-child(${count}) .button_wrapper`);
        // 다음 퀴즈 보여주기
        if (count < quiz_data.length + 1) {
            ulElem.childNodes[count - 1].classList.add("show");
        } else {
            window.location.href = "index.html"
        }

        tg.classList.add("check");
    }
    // 이전 버튼 표시
    btn_back.style.visibility = "visible";
    // 게이지 바 증가
    gaugebar.style.width = `${gauge += 100 / quiz_data.length}%`;
}

// 버튼 상호작용 (체크된 버튼 / 게이지바 / 페리지 카운트)
// btn_wrapper.addEventListener("click", btnControl);
for (const btnElem of btn_wrapper) {
    btnElem.addEventListener('click', btnControl);
}

btn_back.addEventListener("click", () => {
    count--;
    counter.innerHTML = `${count}/${quiz_data.length}`;
    ulElem.childNodes[count - 1].classList.add("show");

    if (count == 1) {
        btn_back.style.visibility = "hidden";
    }

    gaugebar.style.width = `${gauge -= 100 / quiz_data.length}%`;
});

