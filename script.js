const toateRetetele = [
    {
        id: "1",
        titlu: "Pui la cuptor cu cartofi rumeniți și rozmarin",
        categorie: "pui",
        tag: "Pui",
        imagine: "pui1.jpg",
        origine: "Românească",
        ingrediente: ["500g piept de pui", "1kg cartofi", "4 linguri ulei de floarea-soarelui", "3 căței de usturoi", "Rozmarin proaspăt, sare și piper"],
        preparare: "Se așază bucățile de pui și cartofii tăiați în tavă. Se stropesc cu ulei, se adaugă usturoiul zdrobit, rozmarinul, sarea și piperul. Se dă la cuptor la 200 de grade Celsius timp de 50 de minute, până când totul este rumenit și fraged."
    },
    {
        id: "2",
        titlu: "Șnițel din piept de pui în crustă crocantă",
        categorie: "pui",
        tag: "Pui",
        imagine: "pui2.jpg",
        origine: "Austriacă",
        ingrediente: ["500g piept de pui feliat subțire", "2 ouă", "100g făină", "150g pesmet", "Sare, piper și ulei pentru prăjit"],
        preparare: "Fiecare felie de pui se bate ușor cu ciocanul de șnițele. Se trec bucățile prin făină, apoi prin ou bătut cu sare și piper, iar la final prin pesmet. Se prăjesc în ulei încins până devin aurii și crocante pe ambele părți."
    },
    {
        id: "3",
        titlu: "Gulaș tradițional cu carne fragedă de vită",
        categorie: "vita",
        tag: "Vită",
        imagine: "vita1.jpg",
        origine: "Ungurească",
        ingrediente: ["700g carne de vită", "3 cepe mari", "2 linguri boia dulce", "2 cartofi", "Ardei gras, sare și chimen"],
        preparare: "Se călește ceapa tocată mărunt în ulei, se adaugă boiaua și carnea de vită tăiată cuburi. Se stinge cu apă și se lasă să fiarbă înăbușit la foc mic. Se adaugă legumele spre final până când carnea se topește în gură."
    },
    {
        id: "4",
        titlu: "Paste Bolognese cu sos bogat de carne",
        categorie: "paste",
        tag: "Paste",
        imagine: "paste1.jpg",
        origine: "Italiană",
        ingrediente: ["400g paste Tagliatelle sau Spaghetti", "400g carne tocată de vită/porc", "1 conservă roșii tăiate", "1 morcov", "1 ceapă și vin roșu"],
        preparare: "Se călesc ceapa și morcovul ras, se adaugă carnea tocată și se rumeneste. Se toarnă roșiile și un strop de vin roșu, lăsând sosul să scadă la foc mic. Se servește peste pastele fierte al dente."
    },
    {
        id: "5",
        titlu: "Paste cu sos alb și somon afumat",
        categorie: "paste",
        tag: "Paste",
        imagine: "paste2.jpg",
        origine: "Italiană",
        ingrediente: ["400g paste Penne", "200g somon afumat feliat", "200ml smântână dulce pentru gătit", "Mărar proaspăt și parmezan"],
        preparare: "Se fierb pastele conform instrucțiunilor. Într-o tigaie, se încălzește smântâna dulce, se adaugă bucățile de somon afumat și mărarul tocat. Se amestecă totul cu pastele fierbinți."
    },
    {
        id: "6",
        titlu: "Prăjitură pufoasă cu mere și scorțișoară",
        categorie: "desert",
        tag: "Desert",
        imagine: "desert1.jpg",
        origine: "Românească",
        ingrediente: ["1kg mere rase", "4 ouă", "200g zahăr", "200g făină", "1 linguriță scorțișoară și zahăr vanilat"],
        preparare: "Merele rase se călesc scurt cu puțin zahăr și scorțișoară. Se bat ouăle cu zahărul, se adaugă făina, iar compoziția se toarnă peste merele așezate în tavă. Se coace la 180 grade timp de 30 minute."
    },
    {
        id: "7",
        titlu: "Tiramisu clasic italian cu mascarpone",
        categorie: "desert",
        tag: "Desert",
        imagine: "desert2.jpg",
        origine: "Italiană",
        ingrediente: ["300g pișcoturi", "500g cremă mascarpone", "4 ouă", "150g zahăr", "Cafea espresso și cacao pudră"],
        preparare: "Se mixează gălbenușurile cu zahărul, se încorporează mascarpone. Pișcoturile se trec rapid prin cafea rece și se așază în strat, alternând cu crema. Se pudrează din belșug cu cacao la final."
    },
    {
        id: "8",
        titlu: "Salată mediteraneană cu ton și porumb",
        categorie: "salate",
        tag: "Salate",
        imagine: "salata1.jpg",
        origine: "Mediteraneană",
        ingrediente: ["2 conservă ton în ulei", "1 conservă porumb", "Salată verde proaspătă", "Castraveți și lămâie"],
        preparare: "Se spălă și se taie salata verde și castraveții. Se adaugă porumbul și bucățile de ton scurse. Se asezonează cu zeamă de lămâie și ulei de măsline."
    },
    {
        id: "9",
        titlu: "Sos de muștar și miere pentru fripturi",
        categorie: "sosuri",
        tag: "Sosuri",
        imagine: "sos1.jpg",
        origine: "Internațională",
        ingrediente: ["3 linguri muștar clasic", "2 linguri miere naturală", "1 linguriță oțet balsamic", "Ulei de măsline"],
        preparare: "Se amestecă într-un bol muștarul cu mierea și oțetul balsamic până se omogenizează. Se adaugă treptat uleiul de măsline mixând continuu până devine fin."
    },
    {
        id: "10",
        titlu: "Cartofi prăjiți aurii și crocanți la cuptor",
        categorie: "garnituri",
        tag: "Garnituri",
        imagine: "garnitura1.jpg",
        origine: "Internațională",
        ingrediente: ["1kg cartofi tăiați pai", "3 linguri ulei", "Boia dulce, sare și usturoi granulat"],
        preparare: "Cartofii tăiați se țin în apă rece 15 minute, apoi se șterg bine. Se amestecă cu ulei, sare și boia, apoi se coc în tavă la 200 de grade până devin foarte crocanți."
    }
];

const recipesGrid = document.getElementById('recipes-grid');
const categoriesGrid = document.getElementById('categories-grid');
const savedGrid = document.getElementById('saved-grid');
const searchInput = document.getElementById('search-input');
const recipeForm = document.getElementById('recipe-form');
const savedCountSpan = document.getElementById('saved-count');
const recipeModal = document.getElementById('recipe-modal');
const modalBody = document.getElementById('modal-body');
const resultsTitle = document.getElementById('results-title');

let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];

savedRecipes = savedRecipes.map(item => toateRetetele.find(r => r.id === item.id)).filter(Boolean);
localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));

document.addEventListener('DOMContentLoaded', () => {
    recipesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #6b6560; padding: 2rem;">Introdu un cuvânt în bară și apasă pe butonul Caută (sau Enter) pentru a găsi rețete.</p>';
    updateSavedCount();
});

recipeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const termen = searchInput.value.trim().toLowerCase();
    showSection('home');

    if (termen === "") {
        resultsTitle.textContent = "Caută o rețetă";
        recipesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #6b6560; padding: 2rem;">Introdu un cuvânt în bară și apasă pe butonul Caută (sau Enter) pentru a găsi rețete.</p>';
    } else {
        const gasite = toateRetetele.filter(r => 
            r.titlu.toLowerCase().includes(termen) || 
            r.ingrediente.some(i => i.toLowerCase().includes(termen)) ||
            r.categorie.toLowerCase().includes(termen)
        );
        resultsTitle.textContent = `Rezultate pentru: "${searchInput.value.trim()}"`;
        afiseazaRetete(gasite, recipesGrid);

        document.getElementById('recipes-page').scrollIntoView({ behavior: 'smooth' });
    }
});

window.filterByCategory = function(cat) {
    document.querySelectorAll('#categories-page .filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.getAttribute('data-category') === cat) {
            btn.classList.add('active');
        }
    });

    if (cat === 'all') {
        afiseazaRetete(toateRetetele, categoriesGrid);
    } else {
        const filtrate = toateRetetele.filter(r => r.categorie === cat);
        afiseazaRetete(filtrate, categoriesGrid);
    }
};

function afiseazaRetete(lista, container) {
    if (!lista || lista.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Nu am găsit nicio rețetă.</p>';
        return;
    }

    container.innerHTML = '';

    lista.forEach(r => {
        const isSaved = savedRecipes.some(item => item.id === r.id);
        const card = document.createElement('div');
        card.classList.add('recipe-card');

        card.innerHTML = `
            <div class="recipe-img-container">
                <img src="${r.imagine}" alt="${r.titlu}" loading="lazy">
                <span class="recipe-badge">${r.tag}</span>
                <button class="save-btn" onclick="toggleSaveRecipe('${r.id}')">
                    ${isSaved ? '❤️' : '🤍'}
                </button>
            </div>
            <div class="recipe-details">
                <h3 class="recipe-title">${r.titlu}</h3>
                <p class="recipe-desc">O rețetă rafinată și delicioasă de origine ${r.origine}, ideală pentru orice masă.</p>
                <div class="card-actions">
                    <button class="recipe-btn" onclick="openRecipeModal('${r.id}')">Vezi Rețeta</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

window.openRecipeModal = function(id) {
    const r = toateRetetele.find(item => item.id === id) || savedRecipes.find(item => item.id === id);
    if (!r) return;

    recipeModal.style.display = 'flex';

    let ingredienteHtml = '<ul>';
    r.ingrediente.forEach(ing => {
        ingredienteHtml += `<li>${ing}</li>`;
    });
    ingredienteHtml += '</ul>';

    modalBody.innerHTML = `
        <h2 class="modal-recipe-title">${r.titlu}</h2>
        <img src="${r.imagine}" alt="${r.titlu}" class="modal-recipe-img" loading="lazy">
        <div class="modal-recipe-section">
            <h4>Ingrediente:</h4>
            ${ingredienteHtml}
        </div>
        <div class="modal-recipe-section">
            <h4>Mod de preparare:</h4>
            <p>${r.preparare}</p>
        </div>
    `;
};

window.closeModal = function() {
    recipeModal.style.display = 'none';
};

window.addEventListener('click', (e) => {
    if (e.target === recipeModal) {
        closeModal();
    }
});

window.toggleSaveRecipe = function(id) {
    const r = toateRetetele.find(item => item.id === id);
    if (!r) return;

    const index = savedRecipes.findIndex(item => item.id === id);
    if (index > -1) {
        savedRecipes.splice(index, 1);
    } else {
        savedRecipes.push(r);
    }

    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
    updateSavedCount();

    const activeLink = document.querySelector('.main-nav .active');
    if (activeLink && activeLink.getAttribute('href') === '#saved') {
        renderSavedRecipes();
    } else {
        const termen = searchInput.value.trim().toLowerCase();
        if (termen !== "") {
            const gasite = toateRetetele.filter(item => 
                item.titlu.toLowerCase().includes(termen) || 
                item.ingrediente.some(i => i.toLowerCase().includes(termen)) ||
                item.categorie.toLowerCase().includes(termen)
            );
            afiseazaRetete(gasite, recipesGrid);
        }
        const activeCategoryBtn = document.querySelector('#categories-page .filter-btn.active');
        if (activeCategoryBtn) {
            const cat = activeCategoryBtn.getAttribute('data-category');
            filterByCategory(cat);
        }
    }
};

function renderSavedRecipes() {
    if (savedRecipes.length === 0) {
        savedGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #6b6560;">Nu ai salvat nicio rețetă momentan. Apasă pe inimioară de pe oricare rețetă ca să o păstrezi aici.</p>';
        return;
    }

    savedGrid.innerHTML = '';
    savedRecipes.forEach(r => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');

        card.innerHTML = `
            <div class="recipe-img-container">
                <img src="${r.imagine}" alt="${r.titlu}" loading="lazy">
                <span class="recipe-badge">${r.tag}</span>
                <button class="save-btn" onclick="toggleSaveRecipe('${r.id}')">❤️</button>
            </div>
            <div class="recipe-details">
                <h3 class="recipe-title">${r.titlu}</h3>
                <p class="recipe-desc">Rețetă salvată în colecția ta personală.</p>
                <div class="card-actions">
                    <button class="recipe-btn" onclick="openRecipeModal('${r.id}')">Vezi Rețeta</button>
                </div>
            </div>
        `;
        savedGrid.appendChild(card);
    });
}

function updateSavedCount() {
    savedCountSpan.textContent = savedRecipes.length;
}

window.showSection = function(sectionId) {
    const homeSection = document.getElementById('home');
    const recipesPage = document.getElementById('recipes-page');
    const categoriesPage = document.getElementById('categories-page');
    const aboutPage = document.getElementById('about-page');
    const savedPage = document.getElementById('saved-page');

    document.querySelectorAll('.main-nav .nav-link').forEach(link => link.classList.remove('active'));

    recipesPage.style.display = 'none';
    categoriesPage.style.display = 'none';
    aboutPage.style.display = 'none';
    savedPage.style.display = 'none';
    homeSection.style.display = 'none';

    if (sectionId === 'home') {
        homeSection.style.display = 'flex';
        recipesPage.style.display = 'block';
        document.querySelector('[onclick="showSection(\'home\')"]').classList.add('active');
        const termen = searchInput.value.trim().toLowerCase();
        if (termen === "") {
            resultsTitle.textContent = "Caută o rețetă";
            recipesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #6b6560; padding: 2rem;">Introdu un cuvânt în bară și apasă pe butonul Caută (sau Enter) pentru a găsi rețete.</p>';
        }
    } else if (sectionId === 'categories') {
        categoriesPage.style.display = 'block';
        document.querySelector('[onclick="showSection(\'categories\')"]').classList.add('active');
        filterByCategory('all');
    } else if (sectionId === 'about') {
        aboutPage.style.display = 'block';
        document.querySelector('[onclick="showSection(\'about\')"]').classList.add('active');
    } else if (sectionId === 'saved') {
        savedPage.style.display = 'block';
        document.querySelector('[onclick="showSection(\'saved\')"]').classList.add('active');
        renderSavedRecipes();
    }
};