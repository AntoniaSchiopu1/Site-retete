let toateRetetele = [];
let loadedRecipesMap = {};

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

function extractIngrediente(meal) {
    const ingrediente = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const masura = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== "") {
            ingrediente.push(`${masura ? masura : ''} ${ingredient}`.trim());
        }
    }
    return ingrediente;
}

function formateazaRetetaAPI(meal) {
    return {
        id: meal.idMeal,
        titlu: meal.strMeal,
        categorie: meal.strCategory ? meal.strCategory.toLowerCase() : "general",
        tag: meal.strCategory || "Recipe",
        imagine: meal.strMealThumb,
        origine: meal.strArea || "International",
        ingrediente: extractIngrediente(meal),
        preparare: meal.strInstructions || "Instructions are not available."
    };
}

document.addEventListener('DOMContentLoaded', async () => {
    updateSavedCount();
    await cautaReteteAPI("chicken");
});

async function cautaReteteAPI(termen) {
    try {
        recipesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #6b6560; padding: 2rem;">Loading recipes from server...</p>';
        
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${termen}`);
        const data = await response.json();

        if (data.meals) {
            toateRetetele = data.meals.map(formateazaRetetaAPI);
            afiseazaRetete(toateRetetele, recipesGrid);
        } else {
            toateRetetele = [];
            recipesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #6b6560; padding: 2rem;">No recipes found.</p>';
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        recipesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #b22222; padding: 2rem;">Server connection error.</p>';
    }
}

recipeForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const termen = searchInput.value.trim();
    showSection('home');

    if (termen === "") {
        resultsTitle.textContent = "Search for a recipe";
        recipesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #6b6560; padding: 2rem;">Enter a keyword in the bar and click Search.</p>';
    } else {
        resultsTitle.textContent = `Results for: "${termen}"`;
        await cautaReteteAPI(termen);
        document.getElementById('recipes-page').scrollIntoView({ behavior: 'smooth' });
    }
});

window.filterByCategory = async function(cat) {
    document.querySelectorAll('#categories-page .filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.getAttribute('data-category') === cat) {
            btn.classList.add('active');
        }
    });

    categoriesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #6b6560; padding: 2rem;">Loading category...</p>';

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
        const data = await response.json();

        if (data.meals) {
            let list = data.meals.map(m => ({
                id: m.idMeal,
                titlu: m.strMeal,
                categorie: cat.toLowerCase(),
                tag: cat,
                imagine: m.strMealThumb,
                origine: "International",
                ingrediente: ["See details in recipe"],
                preparare: "Click 'View Recipe' for full details."
            }));

            const catLower = cat.toLowerCase();
            
            if (catLower === 'pasta') {
                list = list.filter(m => {
                    const t = m.titlu.toLowerCase();
                    return !t.includes('sandwich') && 
                           !t.includes('burger') && 
                           !t.includes('wrap') && 
                           !t.includes('pie') && 
                           !t.includes('pudding') &&
                           !t.includes('soup');
                });
            } 
            else if (catLower === 'dessert') {
                list = list.filter(m => {
                    const t = m.titlu.toLowerCase();
                    return !t.includes('cocktail') && 
                           !t.includes('drink') && 
                           !t.includes('smoothie') &&
                           !t.includes('punch');
                });
            }
            else if (catLower === 'side') {
                list = list.filter(m => {
                    const t = m.titlu.toLowerCase();
                    return !t.includes('soup') && !t.includes('cake');
                });
            }

            afiseazaRetete(list, categoriesGrid);
        } else {
            categoriesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No recipes found in this category.</p>';
        }
    } catch (err) {
        categoriesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Error fetching categories.</p>';
    }
};

function afiseazaRetete(lista, container) {
    if (!lista || lista.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No recipes found.</p>';
        return;
    }

    container.innerHTML = '';

    lista.forEach(r => {
        loadedRecipesMap[r.id] = r;
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
                <p class="recipe-desc">A refined and delicious recipe of ${r.origine} origin, ideal for any meal.</p>
                <div class="card-actions">
                    <button class="recipe-btn" onclick="openRecipeModal('${r.id}')">View Recipe</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

window.openRecipeModal = async function(id) {
    recipeModal.style.display = 'flex';
    modalBody.innerHTML = '<p style="text-align: center; padding: 2rem;">Loading recipe details...</p>';

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        
        if (data.meals && data.meals[0]) {
            const r = formateazaRetetaAPI(data.meals[0]);
            loadedRecipesMap[r.id] = r;

            let ingredienteHtml = '<ul>';
            r.ingrediente.forEach(ing => {
                ingredienteHtml += `<li>${ing}</li>`;
            });
            ingredienteHtml += '</ul>';

            modalBody.innerHTML = `
                <h2 class="modal-recipe-title">${r.titlu}</h2>
                <img src="${r.imagine}" alt="${r.titlu}" class="modal-recipe-img" loading="lazy">
                <div class="modal-recipe-section">
                    <h4>Ingredients:</h4>
                    ${ingredienteHtml}
                </div>
                <div class="modal-recipe-section">
                    <h4>Instructions:</h4>
                    <p>${r.preparare}</p>
                </div>
            `;
        }
    } catch (e) {
        modalBody.innerHTML = '<p style="text-align: center; color: red;">Could not load details.</p>';
    }
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
    let r = loadedRecipesMap[id] || toateRetetele.find(item => item.id === id) || savedRecipes.find(item => item.id === id);
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
        const activeCategoryBtn = document.querySelector('#categories-page .filter-btn.active');
        if (activeCategoryBtn && document.getElementById('categories-page').style.display !== 'none') {
        } else {
            const termen = searchInput.value.trim();
            if (termen !== "") cautaReteteAPI(termen);
        }
    }
};

function renderSavedRecipes() {
    if (savedRecipes.length === 0) {
        savedGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #6b6560;">You haven\'t saved any recipe yet. Click the heart on any recipe to keep it here.</p>';
        return;
    }

    savedGrid.innerHTML = '';
    savedRecipes.forEach(r => {
        loadedRecipesMap[r.id] = r;
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
                <p class="recipe-desc">Recipe saved in your personal collection.</p>
                <div class="card-actions">
                    <button class="recipe-btn" onclick="openRecipeModal('${r.id}')">View Recipe</button>
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
    } else if (sectionId === 'categories') {
        categoriesPage.style.display = 'block';
        document.querySelector('[onclick="showSection(\'categories\')"]').classList.add('active');
        filterByCategory('Chicken');
    } else if (sectionId === 'about') {
        aboutPage.style.display = 'block';
        document.querySelector('[onclick="showSection(\'about\')"]').classList.add('active');
    } else if (sectionId === 'saved') {
        savedPage.style.display = 'block';
        document.querySelector('[onclick="showSection(\'saved\')"]').classList.add('active');
        renderSavedRecipes();
    }
};
