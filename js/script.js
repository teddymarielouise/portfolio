// js/script.js
let activeFilters = new Set();

document.addEventListener('DOMContentLoaded', () => {
    afficherProjets(mesProjets);
    initFiltres();
});

function afficherProjets(projetsA_Afficher) {
    const container = document.getElementById('container-cards');
    if (!container) return; 

    if (projetsA_Afficher.length === 0) {
        container.innerHTML = `<p class="text-center w-100 mt-4">Aucun projet ne correspond à ces filtres.</p>`;
        return;
    }

    const htmlComplet = projetsA_Afficher.map((projet, index) => {
        // Ajout de couleurs aléatoires ou fixes pour les tags pour plus de vie
        const tagsHTML = projet.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        return `
            <div class="col">
                <article class="carte-projet h-100 d-flex flex-column">
                    <div class="image-wrapper">
                        <img src="${projet.image}" alt="${projet.titre}" class="img-projet" loading="lazy">
                    </div>
                    <div class="card-body-custom d-flex flex-column flex-grow-1">
                        <h3>${projet.titre}</h3>
                        <div class="tags mb-3">${tagsHTML}</div>
                        <p class="projet-description">${projet.description}</p>
                        <div class="mt-auto text-end">
                            <a href="details.html?id=${mesProjets.indexOf(projet)}" class="btn-infos">Découvrir le projet</a>
                        </div>
                    </div>
                </article>
            </div>
        `;
    }).join('');

    container.innerHTML = htmlComplet;
}

function initFiltres() {
    const catContainer = document.getElementById('categories-container');
    const tagsContainer = document.getElementById('tags-container');
    
    if (!catContainer || !tagsContainer) return;
    
    catContainer.innerHTML = '';
    tagsContainer.innerHTML = '';

    filtreContent.categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.textContent = cat;
        btn.onclick = () => toggleFilter(cat, btn);
        catContainer.appendChild(btn);
    });

    filtreContent.tags.forEach(tag => {
        const tagBtn = document.createElement('button');
        tagBtn.className = 'tag-pill';
        tagBtn.textContent = tag;
        tagBtn.onclick = () => toggleFilter(tag, tagBtn);
        tagsContainer.appendChild(tagBtn);
    });
}

function toggleFilter(value, element) {
    if (activeFilters.has(value)) {
        activeFilters.delete(value);
        element.classList.remove('active'); 
    } else {
        activeFilters.add(value);
        element.classList.add('active'); 
    }
    appliquerLeFiltrage(); 
}

function appliquerLeFiltrage() {
    if (activeFilters.size === 0) {
        afficherProjets(mesProjets);
        return;
    }

    const projetsFiltres = mesProjets.filter(projet => {
        return projet.tags.some(tag => activeFilters.has(tag));
    });

    afficherProjets(projetsFiltres);
}