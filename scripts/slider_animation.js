let pxValue = 0;
const ulElem = document.querySelector("ul");

setInterval(() => {
    if (pxValue === 720) pxValue -= 720;
    else pxValue += 180;
    ulElem.style.transform = `translate(-${pxValue}px)`;
}, 1500);

