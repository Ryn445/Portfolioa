
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".navbar ul li a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        navLi.forEach(li => {
            li.classList.remove("active");
            if (li.getAttribute("href").includes(current)) {
                li.classList.add("active");
            }
        });
    });
});


 document.addEventListener("DOMContentLoaded", function() {
        const heading = document.querySelector('.skills .heading');
        const text = heading.textContent;
        heading.innerHTML = '';

        text.split('').forEach(char => {
            const span = document.createElement('span');
            span.textContent = char;
            heading.appendChild(span);
        });
    });

