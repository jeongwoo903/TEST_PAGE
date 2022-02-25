const wrapper = document.querySelector("ul");
console.log(wrapper);
setInterval(() => {
    let firstList = document.querySelector("img:nth-child(1)");
    let lastList = document.querySelector("img:nth-child(5)");
    lastList.insertAdjacentElement("afterend", firstList);
}, 1000);