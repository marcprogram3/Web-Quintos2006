function initCalendar() {
  const calendarEl = document.getElementById('calendar');
  if (!calendarEl) {
    console.log("Esperant que el div #calendar es carregui...");
    setTimeout(initCalendar, 500); // Torna a provar d'aquí 0.5 segons
    return;
  }

  if (!sessionStorage.getItem('infoModalShown')) {
    const modal = document.getElementById('infoModal');
    if (modal) modal.classList.remove('hidden');
    sessionStorage.setItem('infoModalShown', 'true');
  }

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    initialDate: '2026-01-01',  // Obre al gener 2026 per veure Correbars
    locale: 'ca',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth'
    },
    events: events,
    eventClick: info => {
      const p = info.event.extendedProps;
      document.getElementById('eventTitle').textContent = info.event.title;
      document.getElementById('eventDate').textContent = info.event.start.toLocaleDateString('ca-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
      document.getElementById('eventLocation').textContent = p.location || '';
      document.getElementById('eventTime').textContent = p.time || '';
      document.getElementById('eventDescription').textContent = p.description || '';
      document.getElementById('eventImage').src = p.image;
      document.getElementById('eventModal').classList.remove('hidden');
    },
    eventContent: info => {
      return {
        html: `<div class="flex items-center space-x-2">
          <img src="${info.event.extendedProps.image}" class="w-8 h-8 rounded object-cover">
          <span class="font-medium text-xs">${info.event.title}</span>
        </div>`
      };
    }
  });
  calendar.render();
}

// Inicia el calendari quan la pàgina estigui llesta
document.addEventListener('DOMContentLoaded', () => {
  initCalendar();
});