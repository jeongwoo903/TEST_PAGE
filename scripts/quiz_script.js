const ulElem = document.querySelector("ul.content_wrapper");
let format;

const quiz_data = [
    {
        image: "./images/hayang_yee/hayang1.png",
        title: "친구들의 연애상담을 많이 해주는편이냥?",
        up: "맞아 난 연애 큐피트야!",
        down: "아니야.. 귀찮아.."
    },
    {
        image: "./images/hayang_yee/hayang2.png",
        title: "주말이면 집에있는것보다 어딘가 나가야 하냥?",
        up: "나가서 기분전환!",
        down: "집이 최고얌..!!!"
    },
    {
        image: "./images/hayang_yee/hayang3.png",
        title: "주변 사람들이 나를 고지식하다고 하는 편이냥..?",
        up: "그런가? 가끔 들어",
        down: "절.대.아.니.야"
    },
    {
        image: "./images/hayang_yee/hayang4.png",
        title: "4444444444444444444",
        up: "그런가? 가끔 들어",
        down: "절.대.아.니.야"
    },
    {
        image: "./images/hayang_yee/hayang5.png",
        title: "5555555555555555555",
        up: "그런가? 가끔 들어",
        down: "절.대.아.니.야"
    },
    {
        image: "./images/hayang_yee/hayang6.png",
        title: "666666666666666666",
        up: "그런가? 가끔 들어",
        down: "절.대.아.니.야"
    },
    {
        image: "./images/hayang_yee/hayang7.png",
        title: "777777777777777",
        up: "그런가? 가끔 들어",
        down: "절.대.아.니.야"
    },
    {
        image: "./images/hayang_yee/hayang8.png",
        title: "888888888888888888",
        up: "그런가? 가끔 들어",
        down: "절.대.아.니.야"
    },
    {
        image: "./images/hayang_yee/hayang9.png",
        title: "999999999999999",
        up: "그런가? 가끔 들어",
        down: "절.대.아.니.야"
    },
    {
        image: "./images/hayang_yee/hayang1.png",
        title: "101010010101010",
        up: "그런가? 가끔 들어",
        down: "절.대.아.니.야"
    },
]


function insertListPage() {
    const page_list = document.createElement("li");
    page_list.classList.add("page");

    for (let i = 0; i < quiz_data.length; i++) {
        ulElem.appendChild(page_list.cloneNode(false));
    }
} insertListPage();



for (let i = 0; i < quiz_data.length; i++) {
    format = `
    <div class="img_wrapper">
        <img src=${quiz_data[i].image} alt="">
    </div>
    <div class="discription">
        <p class="text">${quiz_data[i].title}</p>
        <div class="button_wrapper">
            <button class="btn up">${quiz_data[i].up}</button>
            <button class="btn down">${quiz_data[i].down}</button>
        </div>
    </div>
    `

    ulElem.childNodes[i].innerHTML = format;
}