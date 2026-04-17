// Compte enrere actiu fins a Carnaval 20/02/2026 23:00
function updateCountdown() {
  const target = new Date('2026-02-20T23:00:00').getTime();
  const now = new Date().getTime();
  const diff = target - now;

  const daysEl    = document.getElementById('days');
  const hoursEl   = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  const nameEl    = document.getElementById('event-name');
  const dateEl    = document.getElementById('event-date');

  if (!daysEl || !nameEl) return; // si els elements no existeixen, surt

  if (diff <= 0) {
    nameEl.textContent = 'Carnaval en curs!';
    dateEl.textContent = 'Ja està aquí!';
    daysEl.textContent = hoursEl.textContent = minutesEl.textContent = secondsEl.textContent = '0';
    return;
  }

  const days    = Math.floor(diff / 86400000);
  const hours   = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  nameEl.textContent = 'Carnaval';
  dateEl.textContent = '20 de febrer – 23:00 h';
  daysEl.textContent    = days;
  hoursEl.textContent   = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);