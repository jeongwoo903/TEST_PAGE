const pElem = document.querySelector(".result");
let mbti = document.location.href.split("#");

pElem.innerHTML = `재미로 본 당신의 MBTI는 ${mbti[1]}입니다.`;