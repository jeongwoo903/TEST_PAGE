const pElem = document.querySelector(".result");
let mbti_regexp = document.location.href.match(/[IENSTFJP]/g);
let mbti = "";
for (let i = 0; i < mbti_regexp.length; i++) {
    mbti += mbti_regexp[i];
}

pElem.innerHTML = `재미로 본 당신의 MBTI는 ${mbti}입니다.`;