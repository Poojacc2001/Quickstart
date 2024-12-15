
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.5s, transform 0.5s";
});


const listBtn = document.getElementById('list-btn');
const dynamicList = document.getElementById('dynamic-gadget-list');


listBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dynamicList.classList.toggle('hidden'); 
    dynamicList.classList.toggle('visible'); 
});
