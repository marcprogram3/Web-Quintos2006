document.addEventListener('DOMContentLoaded', () => {
  if (!sessionStorage.getItem('infoModalShown')) {
    const modal = document.getElementById('infoModal');
    if (modal) modal.classList.remove('hidden');
    sessionStorage.setItem('infoModalShown', 'true');
  }

  const cal = new FullCalendar.Calendar(document.getElementById('calendar'), {
    initialView: 'dayGridMonth',
    initialDate: '2025-12-01',  // Obre directament al desembre
    locale: 'ca',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth'
    },
    events: events.map(e => ({
      id: e.title + e.date,
      title: e.title,
      start: e.date,
      extendedProps: {
        image: e.image,
        location: e.location,
        time: e.time,
        description: e.description
      }
    })),
    eventClick: function(info) {
      const p = info.event.extendedProps;
      document.getElementById('eventTitle').textContent = info.event.title;
      document.getElementById('eventDate').textContent = info.event.start.toLocaleDateString('ca-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
      document.getElementById('eventLocation').textContent = p.location;
      document.getElementById('eventTime').textContent = p.time;
      document.getElementById('eventDescription').textContent = p.description;
      document.getElementById('eventImage').src = p.image;
      document.getElementById('eventModal').classList.remove('hidden');
    },
    eventContent: function(info) {
      return {
        html: `
          <div class="flex items-center space-x-2 text-xs font-medium">
            <img src="${info.event.extendedProps.image}" class="w-8 h-8 rounded object-cover">
            <span>${info.event.title}</span>
          </div>
        `
      };
    }
  });
  cal.render();
});