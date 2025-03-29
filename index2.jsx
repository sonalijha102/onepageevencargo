function toggleFAQ(element) {
    let answers = element.querySelectorAll("p");
    let icon = element.querySelector("h3 i.fas.fa-plus, h3 i.fas.fa-minus");
    let isVisible = answers[0].style.display === "block";

    answers.forEach(answer => {
        answer.style.display = isVisible ? "none" : "block";
    });

    icon.className = isVisible ? "fas fa-plus" : "fas fa-minus";
}
function toggleFAQ(element) {
    let answer = element.querySelector("p");
    let icon = element.querySelector("h3 i.fas.fa-plus, h3 i.fas.fa-minus");
    let isVisible = answer.style.display === "block";
    answer.style.display = isVisible ? "none" : "block";
    icon.className = isVisible ? "fas fa-plus" : "fas fa-minus";
}
function toggleFAQ(item) {
    const content = item.querySelector("p");
    const icon = item.querySelector("h3 i.fa-plus, h3 i.fa-minus");
    
    if (content.style.display === "block") {
        content.style.display = "none";
        icon.classList.replace("fa-minus", "fa-plus");
    } else {
        content.style.display = "block";
        icon.classList.replace("fa-plus", "fa-minus");
    }
}
function toggleFAQ(item) {
    const content = item.querySelector("p");
    const icon = item.querySelector("h3 i.fa-plus, h3 i.fa-minus");
    
    if (content.style.display === "block") {
        content.style.display = "none";
        icon.classList.replace("fa-minus", "fa-plus");
    } else {
        content.style.display = "block";
        icon.classList.replace("fa-plus", "fa-minus");
    }
}

function toggleContent(button) {
    const extraContent = button.previousElementSibling;
    if (extraContent.style.display === "block") {
        extraContent.style.display = "none";
        button.innerText = "Read More";
    } else {
        extraContent.style.display = "block";
        button.innerText = "Read Less";
    }
}
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
});