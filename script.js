const editableText = document.getElementById('editable-text');

if (localStorage.getItem('savedText')) {
  editableText.textContent = localStorage.getItem('savedText');
}


editableText.addEventListener('input', function () {

  localStorage.setItem('savedText', this.textContent);
})

// Añadimos fontawesome

const script = document.createElement("script");

script.src = "https://kit.fontawesome.com/1ee8f271b9.js";

document.body.appendChild(script);


const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search');

// Se envía el formulario al pulsar Intro

searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    submitForm();
  }
});


// Historial de búsquedas
const searchHistoryContainer = document.getElementById('search-history');
function addToSearchHistory(query) {
  if (!query.trim()) return;
  let history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
  // Evitar duplicados consecutivos
  if (history[0] !== query) {
    history.unshift(query);
    // Limitar a 10 elementos
    if (history.length > 10) history = history.slice(0, 10);
    localStorage.setItem('searchHistory', JSON.stringify(history));
    renderSearchHistory();
  }
}




function renderSearchHistory() {
  let history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
  const historyBox = document.getElementById('search-history-container');
  if (!searchHistoryContainer || !historyBox) return;
  searchHistoryContainer.innerHTML = '';
  if (history.length === 0) {
    historyBox.style.display = 'none';
    return;
  }
  historyBox.style.display = '';
  history.forEach((item, idx) => {
    const span = document.createElement('span');
    span.className = 'search-history-tag';

    // Contenido de la búsqueda
    const text = document.createElement('span');
    text.textContent = item;
    text.style.cursor = 'pointer';
    text.onclick = () => {
      searchInput.value = item;
      searchInput.focus();
    };
    span.appendChild(text);

    // Botón eliminar individual
    const delBtn = document.createElement('button');
    delBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    delBtn.className = 'delete-history-btn';
    delBtn.title = 'Eliminar búsqueda';
    delBtn.onclick = (e) => {
      e.stopPropagation();
      removeSearchHistory(idx);
    };
    span.appendChild(delBtn);

    searchHistoryContainer.appendChild(span);
  });
}

function removeSearchHistory(index) {
  if (confirm('¿Seguro que quieres eliminar esta búsqueda del historial?')) {
    let history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    history.splice(index, 1);
    localStorage.setItem('searchHistory', JSON.stringify(history));
    renderSearchHistory();
  }
}

const clearHistoryBtn = document.getElementById('clear-history-btn');
if (clearHistoryBtn) {
  clearHistoryBtn.onclick = () => {
    if (confirm('¿Seguro que quieres borrar todo el historial de búsquedas?')) {
      localStorage.removeItem('searchHistory');
      renderSearchHistory();
    }
  };
}

renderSearchHistory();

function submitForm() {
  const query = searchInput.value;
  const searchEngine = searchInput.dataset.searchEngine;
  window.open(`${searchEngine}${query}`, '_blank');
  addToSearchHistory(query);
}

// Motores de búsqueda

const link0 = document.getElementById('link0');
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');
const link5 = document.getElementById('link5');
const link6 = document.getElementById('link6');
const link7 = document.getElementById('link7');
const link8 = document.getElementById('link8');
const link9 = document.getElementById('link9');
const link10 = document.getElementById('link10');
const link11 = document.getElementById('link11');
const link12 = document.getElementById('link12');
const link13 = document.getElementById('link13');
const link14 = document.getElementById('link14');
const link15 = document.getElementById('link15');
const link16 = document.getElementById('link16');

link0.addEventListener('click', () => {
  searchIcon.src = 'https://cdn-icons-png.flaticon.com/512/300/300221.png';
  searchInput.placeholder = 'Buscar en Google';
  searchInput.dataset.searchEngine = 'https://www.google.com/search?q=';
});

link1.addEventListener('click', () => {
  searchIcon.src = 'https://cdn-icons-png.flaticon.com/512/2111/2111690.png';
  searchInput.placeholder = 'Buscar en Stack Overflow';
  searchInput.dataset.searchEngine = 'https://stackoverflow.com/questions/tagged/';
});

link2.addEventListener('click', () => {
  searchIcon.src = 'https://cdn-icons-png.flaticon.com/512/2175/2175377.png';
  searchInput.placeholder = 'Buscar en Github';
  searchInput.dataset.searchEngine = 'https://github.com/search?q=';
});

link3.addEventListener('click', () => {
  searchIcon.src = 'https://cdn-icons-png.flaticon.com/512/2111/2111351.png';
  searchInput.placeholder = 'Buscar en CodePen';
  searchInput.dataset.searchEngine = 'https://codepen.io/search/pens?q=';
});

link4.addEventListener('click', () => {
  searchIcon.src = 'https://cdn-icons-png.flaticon.com/512/174/174883.png';
  searchInput.placeholder = 'Buscar en Youtube';
  searchInput.dataset.searchEngine = 'https://www.youtube.com/results?search_query=';
});

link5.addEventListener('click', () => {
  searchIcon.src = 'https://cdn-icons-png.flaticon.com/512/174/174872.png';
  searchInput.placeholder = 'Buscar en Spotify';
  searchInput.dataset.searchEngine = 'https://open.spotify.com/search/';
});

link6.addEventListener('click', () => {
  searchIcon.src = 'https://cdn-icons-png.flaticon.com/512/174/174857.png';
  searchInput.placeholder = 'Buscar en Linkedin';
  searchInput.dataset.searchEngine = 'https://www.linkedin.com/search/results/all/?keywords=';
});

link7.addEventListener('click', () => {
  searchIcon.src = 'https://cdn-icons-png.flaticon.com/512/124/124010.png';
  searchInput.placeholder = 'Buscar en Facebook';
  searchInput.dataset.searchEngine = 'https://www.facebook.com/search/top/?q=';
});

link8.addEventListener('click', () => {
  searchIcon.src = 'https://cdn-icons-png.flaticon.com/512/174/174855.png';
  searchInput.placeholder = 'Buscar en Instagram';
  searchInput.dataset.searchEngine = 'https://www.instagram.com/';
});

link9.addEventListener('click', () => {
  searchIcon.src = 'https://cdn-icons-png.flaticon.com/512/174/174880.png';
  searchInput.placeholder = 'Buscar en Wikipedia';
  searchInput.dataset.searchEngine = 'https://es.wikipedia.org/w/index.php?go=Ir&search=';
});

link10.addEventListener('click', () => {
  searchIcon.src = 'https://cdn-icons-png.flaticon.com/512/5968/5968763.png';
  searchInput.placeholder = 'Buscar en Unsplash';
  searchInput.dataset.searchEngine = 'https://unsplash.com/es/s/fotos/';
});

link11.addEventListener('click', () => {
  searchIcon.src = 'https://cdn-icons-png.flaticon.com/512/888/888844.png';
  searchInput.placeholder = 'Buscar en Bing';
  searchInput.dataset.searchEngine = 'https://www.bing.com/search?q=';
});

link12.addEventListener('click', () => {
  searchIcon.src = 'https://w7.pngwing.com/pngs/124/307/png-transparent-duckduckgo-web-search-engine-google-search-anonymity-eyebrows-miscellaneous-logo-smiley.png';
  searchInput.placeholder = 'Buscar en DuckDuckgo';
  searchInput.dataset.searchEngine = 'https://duckduckgo.com/?q=';
});

link13.addEventListener('click', () => {
  searchIcon.src = 'https://images.icon-icons.com/4029/PNG/512/twitter_x_new_logo_x_rounded_icon_256078.png';
  searchInput.placeholder = 'Buscar en X';
  searchInput.dataset.searchEngine = 'https://X.com/search?q=';
});

link14.addEventListener('click', () => {
  searchIcon.src = 'https://icons-for-free.com/iconfiles/png/512/Amazon-1320568265160748167.png';
  searchInput.placeholder = 'Buscar en Amazon';
  searchInput.dataset.searchEngine = 'https://www.amazon.es/s?k=';
});

link15.addEventListener('click', () => {
  searchIcon.src = 'https://img.icons8.com/plasticine/512/amazon-prime-video.png';
  searchInput.placeholder = 'Buscar en Amazon Prime Vídeo';
  searchInput.dataset.searchEngine = 'https://www.primevideo.com/region/eu/search/ref=atv_nb_sug?ie=UTF8&phrase=';
});

link16.addEventListener('click', () => {
  searchIcon.src = 'https://cdn-icons-png.flaticon.com/512/1409/1409938.png';
  searchInput.placeholder = 'Buscar en Reddit';
  searchInput.dataset.searchEngine = 'https://www.reddit.com/search/?q=';
});

// Primera búsqueda

function googleSearch() {
  const query = searchInput.value;
  const searchEngine = searchInput.dataset.searchEngine || 'https://www.google.com/search?q=';
  window.open(`${searchEngine}${query}`, '_blank');
}

// Botón borrar

function borrarInput() {
  searchInput.value = '';
}

// --- Notas rápidas ---
const notesKey = 'quickNotes';
const notesInput = document.getElementById('quick-note-input');
const addNoteBtn = document.getElementById('add-note-btn');
const clearNotesBtn = document.getElementById('clear-notes-btn');
const notesList = document.getElementById('quick-notes-list');

function getNotes() {
  return JSON.parse(localStorage.getItem(notesKey) || '[]');
}

function saveNotes(notes) {
  localStorage.setItem(notesKey, JSON.stringify(notes));
}

function renderNotes() {
  if (!notesList) return;
  const notes = getNotes();
  notesList.innerHTML = '';
  if (notes.length === 0) {
    notesList.style.display = 'none';
    return;
  }
  notesList.style.display = '';
  notes.forEach((note, idx) => {
    const li = document.createElement('li');
    li.className = 'quick-note-item';
    li.textContent = note;
    // Botón eliminar individual
    const delBtn = document.createElement('button');
    delBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    delBtn.className = 'delete-note-btn';
    delBtn.title = 'Eliminar nota';
    delBtn.onclick = (e) => {
      e.stopPropagation();
      if (confirm('¿Seguro que quieres eliminar esta nota?')) {
        const notes = getNotes();
        notes.splice(idx, 1);
        saveNotes(notes);
        renderNotes();
      }
    };
    li.appendChild(delBtn);
    notesList.appendChild(li);
  });
}

if (addNoteBtn && notesInput) {
  addNoteBtn.onclick = function () {
    const note = notesInput.value.trim();
    if (!note) return;
    const notes = getNotes();
    notes.unshift(note);
    // Limitar a 10 notas
    if (notes.length > 10) notes.length = 10;
    saveNotes(notes);
    notesInput.value = '';
    renderNotes();
  };
}

if (clearNotesBtn) {
  clearNotesBtn.onclick = function () {
    if (confirm('¿Seguro que quieres borrar todas las notas?')) {
      saveNotes([]);
      renderNotes();
    }
  };
}

renderNotes();

// --- Reloj y Calendario ---
let currentDate = new Date();

function updateClock() {
  const now = new Date();
  const timeElement = document.getElementById('time');

  // Formato de hora: HH:MM:SS
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;

  // Actualizar fecha en el calendario simple
  updateSimpleDate();
}

// Actualizar fecha simple
function updateSimpleDate() {
  const dateElement = document.getElementById('date');
  const now = new Date();
  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const dayName = days[now.getDay()];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  dateElement.textContent = `${dayName}, ${day} de ${month} de ${year}`;
}

// Calendario interactivo
function toggleCalendarModal() {
  const modal = document.getElementById('calendar-modal');
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
  if (modal.style.display === 'block') {
    renderCalendar();
    // Ocultar las notas al abrir el modal
    const dayNotes = document.getElementById('day-notes');
    dayNotes.style.display = 'none';
  }
}

function renderCalendar() {
  const monthYearElement = document.getElementById('current-month-year');
  const calendarGrid = document.getElementById('calendar-grid');

  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  monthYearElement.textContent = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

  calendarGrid.innerHTML = '';

  // Días de la semana comenzando en Lunes
  const daysOfWeek = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  daysOfWeek.forEach(day => {
    const dayElement = document.createElement('div');
    dayElement.textContent = day;
    dayElement.style.fontWeight = 'bold';
    calendarGrid.appendChild(dayElement);
  });

  // Primer día del mes
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  
  // Ajustar para que comience en Lunes (1 = Lunes, 0 = Domingo -> 7)
  let startDayOfWeek = firstDay.getDay();
  if (startDayOfWeek === 0) startDayOfWeek = 7; // Domingo = 7
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - (startDayOfWeek - 1));

  // Generar días
  for (let i = 0; i < 42; i++) { // 6 semanas * 7 días
    const dayElement = document.createElement('div');
    dayElement.className = 'calendar-day';
    const dayDate = new Date(startDate);
    dayDate.setDate(startDate.getDate() + i);

    const dateKey = dayDate.toISOString().split('T')[0];
    const notes = JSON.parse(localStorage.getItem(`notes-${dateKey}`) || '[]');
    const hasNotes = notes.length > 0;

    dayElement.textContent = dayDate.getDate() + (hasNotes ? '*' : '');

    if (dayDate.getMonth() !== currentDate.getMonth()) {
      dayElement.classList.add('other-month');
    }

    if (dayDate.toDateString() === new Date().toDateString()) {
      dayElement.classList.add('today');
    }

    dayElement.onclick = () => selectDay(dayDate);
    calendarGrid.appendChild(dayElement);
  }
}

function selectDay(date) {
  const dayNotes = document.getElementById('day-notes');
  const selectedDateElement = document.getElementById('selected-date');
  const noteText = document.getElementById('note-text');
  const savedNotes = document.getElementById('saved-notes');

  selectedDateElement.textContent = date.toLocaleDateString('es-ES');
  dayNotes.style.display = 'block';

  const dateKey = date.toISOString().split('T')[0]; // YYYY-MM-DD
  const notes = JSON.parse(localStorage.getItem(`notes-${dateKey}`) || '[]');

  savedNotes.innerHTML = '';
  notes.forEach((note, index) => {
    const noteDiv = document.createElement('div');
    noteDiv.textContent = note;
    noteDiv.style.marginBottom = '0.5rem';
    noteDiv.style.padding = '0.5rem';
    noteDiv.style.background = 'rgba(255,255,255,0.1)';
    noteDiv.style.borderRadius = '0.25rem';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.style.marginLeft = '0.5rem';
    deleteBtn.onclick = () => deleteNote(dateKey, index);
    noteDiv.appendChild(deleteBtn);
    savedNotes.appendChild(noteDiv);
  });

  document.getElementById('save-note').onclick = () => saveNote(dateKey);
}

function saveNote(dateKey) {
  const noteText = document.getElementById('note-text');
  if (!noteText.value.trim()) return;

  const notes = JSON.parse(localStorage.getItem(`notes-${dateKey}`) || '[]');
  notes.push(noteText.value.trim());
  localStorage.setItem(`notes-${dateKey}`, JSON.stringify(notes));
  noteText.value = '';
  renderCalendar(); // Actualizar indicadores
  selectDay(new Date(dateKey)); // Recargar notas
}

function deleteNote(dateKey, index) {
  const notes = JSON.parse(localStorage.getItem(`notes-${dateKey}`) || '[]');
  notes.splice(index, 1);
  localStorage.setItem(`notes-${dateKey}`, JSON.stringify(notes));
  renderCalendar(); // Actualizar indicadores
  selectDay(new Date(dateKey)); // Recargar notas
}

// Navegación de meses
document.getElementById('prev-month').onclick = () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
};

document.getElementById('next-month').onclick = () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
};

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
  const modal = document.getElementById('calendar-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Actualizar cada segundo
setInterval(updateClock, 1000);
updateClock(); // Llamar inmediatamente