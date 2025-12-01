function getNextEvent() {
  const now = new Date();
  let next = null;
  let minDiff = Infinity;
  events.forEach(e => {
    const d = new Date(e.date);
    if (d > now && (d - now) < minDiff) {
      minDiff = d - now;
      next = e;
    }
  });
  return next || events[0];
}

function updateCountdown() {
  const e = getNextEvent();
  const target = new Date(e.date).getTime();
  const now = new Date().getTime();
  const diff = target - now;
  if (diff <= 0) { updateCountdown(); return; }

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  document.getElementById('event-name').textContent = e.title;
  document.getElementById('event-date').textContent = 
    `${new Date(e.date).toLocaleDateString('ca-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} – ${new Date(e.date).toLocaleTimeString('ca-ES', { hour: '2-digit', minute: '2-digit' })}`;
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}
updateCountdown();
setInterval(updateCountdown, 1000);