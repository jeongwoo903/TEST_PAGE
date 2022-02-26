(function () {
    // start button interaction
    document.querySelectorAll('.btn').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');

    // jump to quiz page
    const start_btn = document.querySelector(".btn");

    start_btn.addEventListener("click", () => {
        window.location.href = "quiz.html";
    });
})();