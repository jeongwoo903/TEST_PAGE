const ulElem = document.querySelector("ul.content_wrapper");
// 버튼 누르면 앞으로 가기
let page_value = 0;
const btn = document.querySelectorAll(".btn");
const btn_up = document.querySelector("button.up");
const btn_down = document.querySelector("button.down");
// 버튼 누르면 뒤로 가기
const btn_back = document.querySelector("button.back");
// 페이지 수 세기
let count = 1;
const counter = document.querySelector("p.count");
// 페이지 게이지
let gauge = 10;
const gaugebar = document.querySelector("div.gauge");

const page_width = ulElem.childNodes[1].clientWidth;

for (const btn_child of btn) {
    btn_child.addEventListener("click", () => {
        page_value += page_width;
        btn_back.style.visibility = "visible";
        ulElem.style.transform = `translate(-${page_width}px)`;
        gaugebar.style.width = `${gauge += 10}%`;
    });
}

btn_up.addEventListener("click", () => {
    count++;
    counter.innerHTML = `${count}/10`;
});

btn_down.addEventListener("click", () => {
    count--;
    counter.innerHTML = `${count}/10`;
});

if (page_value == 0) btn_back.style.visibility = "hidden";

btn_back.addEventListener("click", () => {
    if (page_value == ulElem.childNodes[1].clientWidth) btn_back.style.visibility = "hidden";

    page_value -= page_width;
    ulElem.style.transform = `translate(-${page_value}px)`;
    count--;
    counter.innerHTML = `${count}/10`;

    gaugebar.style.width = `${gauge -= 10}%`;
});

console.log(count);