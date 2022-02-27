const ulElem = document.querySelector("ul.content_wrapper");
// 페이지 보여주기
ulElem.childNodes[1].classList.add("show");
// 버튼 누르면 앞으로 가기
const btn = document.querySelectorAll(".btn");
const btn_wrapper = document.querySelector(".button_wrapper");
const btn_up = document.querySelector("button.up");
const btn_down = document.querySelector("button.down");
// 버튼 누르면 뒤로 가기
const btn_back = document.querySelector("button.back");
// 페이지 수 세기 -> 1이하가 안되게끔..
let count = 1;
const counter = document.querySelector("p.count");
// 페이지 게이지
let gauge = 10;
const gaugebar = document.querySelector("div.gauge");

// 버튼 상호작용 (체크된 버튼 / 게이지바 / 페리지 카운트)
btn_wrapper.addEventListener("click", e => {
    const tg = e.target;
    const currentItem = document.querySelector(".check");

    ulElem.childNodes[2 * count - 1].classList.remove("show");

    count++;
    counter.innerHTML = `${count}/10`;

    ulElem.childNodes[2 * count - 1].classList.add("show");

    if (currentItem) {
        currentItem.classList.remove("check");
    }

    if (tg.classList.contains("btn")) {
        tg.classList.add("check");
    }

    btn_back.style.visibility = "visible";
    gaugebar.style.width = `${gauge += 10}%`;
});

btn_back.addEventListener("click", () => {
    count--;
    counter.innerHTML = `${count}/10`;
    ulElem.childNodes[2 * count - 1].classList.add("show");

    if (count == 1) {
        btn_back.style.visibility = "hidden";
    }

    gaugebar.style.width = `${gauge -= 10}%`;
});