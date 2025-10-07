// Плавная прокрутка по якорям
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href');
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Простейшая маска-валидация телефона (только цифры/+, длина > 10)
function isPhoneValid(v) {
  const s = String(v || '').replace(/\s+/g, '');
  return /^\+?\d{10,}$/.test(s);
}

// Тост-уведомление
const toast = document.getElementById('toast');
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// Обработка формы заявки
const form = document.getElementById('quoteForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));

    if (!isPhoneValid(data.phone)) {
      showToast('Проверьте корректность номера телефона');
      return;
    }

    // Имитация отправки: можно заменить на реальный fetch('/api')
    setTimeout(() => {
      showToast('Спасибо! Менеджер свяжется с вами в ближайшее время');
      form.reset();
    }, 600);
  });
}