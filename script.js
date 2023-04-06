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

function submitForm() {
  const query = searchInput.value;
  const searchEngine = searchInput.dataset.searchEngine 
  window.open(`${searchEngine}${query}`, '_blank');
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
  searchIcon.src = 'https://cdn.icon-icons.com/icons2/1584/PNG/512/3721677-twitter_108058.png';
  searchInput.placeholder = 'Buscar en Twitter';
  searchInput.dataset.searchEngine = 'https://twitter.com/search?q=';
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