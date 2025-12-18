const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

const editJobBtn = document.getElementById('editJobBtn');
const jobTitle = document.getElementById('jobTitle');
editJobBtn.addEventListener('click', function() {
    let newTitle = prompt("Enter new job title:", jobTitle.textContent);
    if (newTitle && newTitle.trim() !== "") {
        jobTitle.textContent = newTitle;
    }
});

const toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
const skillsSection = document.getElementById('skillsSection');
toggleSkillsBtn.addEventListener('click', function() {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleSkillsBtn.textContent = 'Hide Skills';
    } else {
        skillsSection.style.display = 'none';
        toggleSkillsBtn.textContent = 'Show Skills';
    }
});

const msgBox = document.getElementById('msgBox');
const counter = document.getElementById('counter');
msgBox.addEventListener('keyup', function() {
    counter.textContent = 200 - msgBox.value.length;
});

function validateForm() {
    const name = document.getElementById('nameField').value;
    const email = document.getElementById('emailField').value;
    if (name === "" || email === "") {
        alert("Please fill in both Name and Email.");
        return false;
    }
    alert("Message sent!");
    return true;
}

document.getElementById('dateDisplay').textContent = new Date().toDateString();

const hours = new Date().getHours();
let greet = hours < 12 ? "Good Morning!" : (hours < 18 ? "Good Afternoon!" : "Good Evening!");
document.getElementById('greetingMsg').textContent = greet;

document.querySelectorAll('.navbar nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

