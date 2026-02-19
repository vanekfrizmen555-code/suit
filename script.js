// Меню по клику
const menuBtn = document.getElementById('menuBtn');
const dropdown = document.getElementById('dropdown');

function toggleMenu() {
dropdown.classList.toggle('show');
}

function closeMenu() {
dropdown.classList.remove('show');
}

menuBtn.addEventListener('click', function(e) {
e.stopPropagation();
toggleMenu();
createParticles(e.clientX, e.clientY);
});

// Закрытие при клике вне меню
document.addEventListener('click', function(e) {
if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
closeMenu();
}
});

// Частицы
function createParticles(x, y) {
const container = document.createElement('div');
container.className = 'particle-container';
document.body.appendChild(container);

const rect = menuBtn.getBoundingClientRect();
const centerX = rect.left + rect.width / 2;
const centerY = rect.top + rect.height / 2;

for (let i = 0; i < 20; i++) {
const particle = document.createElement('div');
particle.className = 'particle';
const angle = (i / 20) * Math.PI * 2;
const distance = 50 + Math.random() * 50;
const tx = Math.cos(angle) * distance + (Math.random() - 0.5) * 30;
const ty = Math.sin(angle) * distance + (Math.random() - 0.5) * 30;
particle.style.setProperty('--tx', tx + 'px');
particle.style.setProperty('--ty', ty + 'px');
particle.style.left = centerX + 'px';
particle.style.top = centerY + 'px';
container.appendChild(particle);
setTimeout(() => particle.remove(), 1000);
}
setTimeout(() => container.remove(), 1000);
}

// Копирование IP
function copyIP() {
const ip = 'play.strangermc.ru';
navigator.clipboard.writeText(ip).then(() => {
const notification = document.createElement('div');
notification.className = 'copy-notification';
notification.textContent = '✅ IP скопирован: ' + ip;
document.body.appendChild(notification);
setTimeout(() => notification.remove(), 2000);
});
}

// Скролл к IP
function scrollToIP() {
document.getElementById("ip").scrollIntoView({behavior:"smooth"});
}

// Новая функция - скролл наверх (к hero секции)
function scrollToTop() {
document.getElementById("hero").scrollIntoView({behavior:"smooth"});
}

// Открытие страниц
function openPage(pageId) {
document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
document.getElementById(pageId).classList.add("active");
window.scrollTo({top: 0, behavior: 'smooth'});
closeMenu(); // Закрываем меню после выбора
}