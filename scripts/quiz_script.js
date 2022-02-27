let ulElem = document.querySelector("ul.content_wrapper");
let format;

const quiz_data = [
    {
        image: "./images/hayang_yee/hayang1.png",
        title: "새학기 시간표! 어떻게 하는 편이냥?",
        up: "J최적의 전공 시간표를 짜둔다",
        down: "P재밌는 교양 어디 없나?"
    },
    {
        image: "./images/hayang_yee/hayang2.png",
        title: "주말에는 주로 어떻게 지내냥?",
        up: "E나가서 기분전환!",
        down: "I집이 최고야..!"
    },
    {
        image: "./images/hayang_yee/hayang4.png",
        title: "교수님 강의가 하나도 이해가 안간다냥..",
        up: "S이게 무슨 소리야..이해불가",
        down: "N모르겠지만 적어두자!"
    },
    {
        image: "./images/hayang_yee/hayang5.png",
        title: "시험공부 할 때 어떻게 하는 편이냥?",
        up: "J미리 계획을 세워둔다",
        down: "P시험공부는 일주일 전부터!"
    },
    {
        image: "./images/hayang_yee/hayang6.png",
        title: "공부하기 싫을때 어떻게 하는 편이냥?",
        up: "S그냥 하기 싫다.",
        down: "N공부를 왜 해야하는거지?"
    },
    {
        image: "./images/hayang_yee/hayang8.png",
        title: "새학기! 처음보는 친구에게 어떻게 할거냥?",
        up: "E먼저 다가간다",
        down: "I다가오길 기다린다"
    },
    {
        image: "./images/hayang_yee/hayang4.png",
        title: "동아리를 소개해야 한다냥!",
        up: "F감성 자극 스토리텔링..",
        down: "T수치의 신뢰성"
    },
    {
        image: "./images/hayang_yee/hayang2.png",
        title: "생각나서 연락했다냥!",
        up: "T왜 갑자기 그래..",
        down: "F고마워..ㅠㅠ"
    },
    {
        image: "./images/hayang_yee/hayang3.png",
        title: "동아리 활동 어떻게 할꺼냥?",
        up: "E동아리원들과 파이팅!",
        down: "I개인 시간이 필요해.."
    },
    {
        image: "./images/hayang_yee/hayang7.png",
        title: "약속시간이 다가온다냥!",
        up: "J여유롭게 출발!",
        down: "P항상 마음만은 이미 도착"
    },
    {
        image: "./images/hayang_yee/hayang9.png",
        title: "이번 시험 망쳤다냥..ㅠ",
        up: "T얼마나 망쳤길래 그래?",
        down: "F나도 망쳤어...ㅠㅠㅠ"
    },
    {
        image: "./images/hayang_yee/hayang1.png",
        title: "하냥이는?",
        up: "NERICA 공식 마스코트",
        down: "S귀.엽.다"
    }
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
            <button class="btn up">${quiz_data[i].up.slice(1)}</button>
            <button class="btn down">${quiz_data[i].down.slice(1)}</button>
        </div>
    </div>
    `
    ulElem.childNodes[i].innerHTML = format;
}