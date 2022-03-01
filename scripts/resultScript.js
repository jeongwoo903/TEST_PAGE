const wrapper = document.querySelector(".wrapper");
const mbti_ment = document.querySelector(".mbti_ment");
const mbti_result = document.querySelector(".mbti_result");
const course_wrapper = document.querySelector(".course_wrapper");
const courseElem = document.querySelector(".course");
const course_svg = document.querySelector("#course_svg");
const btn = document.querySelector(".return");

let mbti = document.location.href.split("#")[1];

const jujeob = ['열심히! ', '졸면서..zz ', '하이비비와 함께 ']
const course_data = [
    {
        mbti_1: "ISFJ",
        course: "20px약학대학",
        image: "./images/hayang_yee/hayang7.png",
        link: "https://blog.naver.com/hyerica4473/221868780009"
    },
    {
        mbti_1: "INTP",
        mbti_2: "ISTP",
        course: "20px공학대학",
        image: "./images/hayang_yee/hayang3.png",
        link: "https://blog.naver.com/hyerica4473/222415755402"
    },
    {
        mbti_1: "ENTP",
        mbti_2: "ENFJ",
        course: "20px언론정보대학",
        image: "./images/hayang_yee/hayang8.png",
        link: "https://blog.naver.com/hyerica4473/222416395665"
    },
    {
        mbti_1: "ESFJ",
        mbti_2: "INFJ",
        course: "20px국제문화대학",
        image: "./images/hayang_yee/hayang5.png",
        link: "https://blog.naver.com/hyerica4473/222416395665"
    },
    {
        mbti_1: "ESTJ",
        mbti_2: "ESTP",
        course: "20px경상대학",
        image: "./images/hayang_yee/hayang2.png",
        link: "https://blog.naver.com/hyerica4473/222418818683"
    },
    {
        mbti_1: "INTJ",
        mbti_2: "ENTJ",
        course: "18px소프트웨어융합대학",
        image: "./images/hayang_yee/hayang1.png",
        link: "https://blog.naver.com/hyerica4473/222416201172"
    },
    {
        mbti_1: "ISTJ",
        course: "18px과학기술융합대학",
        image: "./images/hayang_yee/hayang4.png",
        link: "https://blog.naver.com/hyerica4473/222416328311"
    },
    {
        mbti_1: "ISFP",
        mbti_2: "INFP",
        course: "20px디자인대학",
        image: "./images/hayang_yee/hayang6.png",
        link: "https://blog.naver.com/hyerica4473/222418846113"
    },
    {
        mbti_1: "ESFP",
        mbti_2: "ENFP",
        course: "20px예체능대학",
        image: "./images/hayang_yee/hayang9.png",
        link: "https://blog.naver.com/hyerica4473/222418861237"
    },
]

mbti_ment.innerText = `하냥이가 ${jujeob[Math.floor(Math.random() * jujeob.length)]}알아본,`
mbti_result.innerHTML = `[ ${mbti} ] 일 것 같은 당신에게 </br> 어울리는 학과는...`;

for (let i = 0; i < course_data.length; i++) {
    if (mbti == course_data[i].mbti_1 || mbti == course_data[i].mbti_2) {
        courseElem.innerText = `${course_data[i].course.slice(4)}`;
        courseElem.style.fontSize = `${course_data[i].course.slice(0, 4)}`

        let imageElem = document.createElement("img");
        imageElem.classList.add("course_img");
        imageElem.src = `${course_data[i].image}`;
        imageElem.alt = "단과대학별_하냥이"
        course_wrapper.append(imageElem);

        let linkElem = document.createElement("a");
        linkElem.href = `${course_data[i].link}`;
        linkElem.innerText = `${course_data[i].course.slice(4)} 더 알아보기!`
        wrapper.append(linkElem);

        // if (mbti == "INTJ" || mbti == "ENTJ") {
        //     imageElem.style.transform = "translateY(-14px)";
        // }
    }
}

btn.addEventListener("click", () => {
    window.location.href = "index.html";
})
