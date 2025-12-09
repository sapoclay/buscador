const editableText = document.getElementById('editable-text');

if (localStorage.getItem('savedText')) {
  editableText.textContent = localStorage.getItem('savedText');
}


editableText.addEventListener('input', function () {

  localStorage.setItem('savedText', this.textContent);
})

// Añadimos fontawesome

const script = document.createElement("script");

script.src = "https://kit.fontawesome.com/435871f80a.js"; // Reemplaza con tu propio kit de FontAwesome

document.body.appendChild(script);


const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search');

// Se envía el formulario al pulsar Intro
searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    googleSearch();
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

// Motores de búsqueda - Configuración
const searchEngines = {
  link0: { icon: 'google.png', placeholder: 'Buscar en Google', url: 'https://www.google.com/search?q=' },
  link1: { icon: 'stackoverflow.png', placeholder: 'Buscar en Stack Overflow', url: 'https://stackoverflow.com/questions/tagged/' },
  link2: { icon: 'github.png', placeholder: 'Buscar en Github', url: 'https://github.com/search?q=' },
  link3: { icon: 'codepen.png', placeholder: 'Buscar en CodePen', url: 'https://codepen.io/search/pens?q=' },
  link4: { icon: 'youtube.png', placeholder: 'Buscar en Youtube', url: 'https://www.youtube.com/results?search_query=' },
  link5: { icon: 'spotify.png', placeholder: 'Buscar en Spotify', url: 'https://open.spotify.com/search/' },
  link6: { icon: 'linkedin.png', placeholder: 'Buscar en Linkedin', url: 'https://www.linkedin.com/search/results/all/?keywords=' },
  link7: { icon: 'facebook.png', placeholder: 'Buscar en Facebook', url: 'https://www.facebook.com/search/top/?q=' },
  link8: { icon: 'instagram.png', placeholder: 'Buscar en Instagram', url: 'https://www.instagram.com/' },
  link9: { icon: 'wikipedia.png', placeholder: 'Buscar en Wikipedia', url: 'https://es.wikipedia.org/w/index.php?go=Ir&search=' },
  link10: { icon: 'unsplash.png', placeholder: 'Buscar en Unsplash', url: 'https://unsplash.com/es/s/fotos/' },
  link11: { icon: 'bing.png', placeholder: 'Buscar en Bing', url: 'https://www.bing.com/search?q=' },
  link12: { icon: 'duckduckgo.png', placeholder: 'Buscar en DuckDuckgo', url: 'https://duckduckgo.com/?q=' },
  link13: { icon: 'x.png', placeholder: 'Buscar en X', url: 'https://X.com/search?q=' },
  link14: { icon: 'amazon.png', placeholder: 'Buscar en Amazon', url: 'https://www.amazon.es/s?k=' },
  link15: { icon: 'primevideo.png', placeholder: 'Buscar en Amazon Prime Vídeo', url: 'https://www.primevideo.com/region/eu/search/ref=atv_nb_sug?ie=UTF8&phrase=' },
  link16: { icon: 'reddit.png', placeholder: 'Buscar en Reddit', url: 'https://www.reddit.com/search/?q=' }
};

// Asignar eventos a todos los motores de búsqueda
Object.keys(searchEngines).forEach(linkId => {
  const element = document.getElementById(linkId);
  if (element) {
    element.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const config = searchEngines[linkId];
      document.getElementById('search-icon').src = './Img/logos/' + config.icon;
      document.getElementById('search').placeholder = config.placeholder;
      document.getElementById('search').dataset.searchEngine = config.url;
    });
  }
});

// Función de búsqueda (usada por botón y Enter)
function googleSearch() {
  const query = searchInput.value;
  const searchEngine = searchInput.dataset.searchEngine || 'https://www.google.com/search?q=';
  window.open(`${searchEngine}${query}`, '_blank');
  addToSearchHistory(query);
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
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

if (prevMonthBtn) {
  prevMonthBtn.addEventListener('click', function(e) {
    e.preventDefault();
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });
}

if (nextMonthBtn) {
  nextMonthBtn.addEventListener('click', function(e) {
    e.preventDefault();
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });
}

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