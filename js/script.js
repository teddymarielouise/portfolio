document.addEventListener('DOMContentLoaded', () => {
    afficherProjets(mesProjets);
    initFiltres();
});

function afficherProjets(projetsA_Afficher) {
    const container = document.getElementById('container-cards');
    if (!container) return; // Sécurité si on n'est pas sur la bonne page

    // On utilise map() pour créer un tableau de chaînes HTML, puis join('') pour en faire un seul gros bloc HTML
    const htmlComplet = projetsA_Afficher.map((projet, index) => {
        const tagsHTML = projet.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        return `
            <div class="col">
                <article class="carte-projet h-100 d-flex flex-column">
                    <div class="image-wrapper">
                        <img src="${projet.image}" alt="Aperçu du projet ${projet.titre}" class="img-projet" loading="lazy">
                        <div class="content-overlay">
                            <h3>${projet.titre}</h3>
                            <div class="tags">${tagsHTML}</div>
                        </div>
                    </div>
                    
                    <div class="card-body-custom d-flex flex-column flex-grow-1 p-3">
                        <p class="projet-description">${projet.description}</p>
                        <div class="mt-auto text-end">
                            <a href="details.html?id=${index}" class="btn-infos">Plus d'informations</a>
                        </div>
                    </div>
                </article>
            </div>
        `;
    }).join('');

    // On injecte tout en une seule fois (meilleure performance)
    container.innerHTML = htmlComplet;
}

// Stockage des filtres actuellement sélectionnés
let activeFilters = new Set();

function initFiltres() {
    const catContainer = document.getElementById('categories-container');
    const tagsContainer = document.getElementById('tags-container');
    
    // Sécurité : on vérifie que les conteneurs existent sur la page
    if (!catContainer || !tagsContainer) return;
    
    // On vide le contenu existant
    catContainer.innerHTML = '';
    tagsContainer.innerHTML = '';

    // 1. Générer les catégories
    filtreContent.categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn'; // Ta classe CSS !
        btn.textContent = cat;
        btn.onclick = () => toggleFilter(cat, btn);
        catContainer.appendChild(btn);
    });

    // 2. Générer les tags
    filtreContent.tags.forEach(tag => {
        const tagBtn = document.createElement('button');
        tagBtn.className = 'tag-pill'; // Ta classe CSS !
        tagBtn.textContent = tag;
        tagBtn.onclick = () => toggleFilter(tag, tagBtn);
        tagsContainer.appendChild(tagBtn);
    });
}

    // 2. Boucle pour les catégories
    const catDest = document.querySelector('#group-categories .filter-options');
    filtreContent.categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'pill-btn';
        btn.textContent = cat.toUpperCase();
        btn.onclick = () => toggleFilter(cat, btn);
        catDest.appendChild(btn);
    });

    // 3. Boucle pour les tags
    const tagDest = document.querySelector('#group-tags .tags-grid');
    filtreContent.tags.forEach(tag => {
        const tagRow = document.createElement('div');
        tagRow.className = 'tag-row';
        tagRow.innerHTML = `<span></span><span class="tag-pill">${tag}</span>`;
        tagRow.onclick = () => toggleFilter(tag, tagRow.querySelector('.tag-pill'));
        tagDest.appendChild(tagRow);
    });



// Fonction pour activer/désactiver visuellement le filtre
function toggleFilter(value, element) {
    if (activeFilters.has(value)) {
        activeFilters.delete(value);
        // On utilise 'active' pour correspondre parfaitement à ton style.css
        element.classList.remove('active'); 
    } else {
        activeFilters.add(value);
        // On utilise 'active' pour correspondre parfaitement à ton style.css
        element.classList.add('active'); 
    }
    
    // On met à jour l'affichage des cartes
    appliquerLeFiltrage(); 
}

// Fonction pour filtrer et n'afficher que les bons projets
function appliquerLeFiltrage() {
    // Si aucun filtre n'est sélectionné, on affiche toutes les cartes
    if (activeFilters.size === 0) {
        afficherProjets(mesProjets);
        return;
    }

    // Sinon, on garde uniquement les projets qui ont au moins un tag/catégorie correspondant
    const projetsFiltres = mesProjets.filter(projet => {
        // Tu peux vérifier dans les tags (ou dans la catégorie si tu l'ajoutes à tes données)
        return projet.tags.some(tag => activeFilters.has(tag));
    });

    afficherProjets(projetsFiltres);
}

function appliquerLeFiltrage() {
    // Si aucun filtre n'est sélectionné, on affiche tout
    if (activeFilters.size === 0) {
        afficherProjets(mesProjets);
        return;
    }

    // Sinon, on filtre les projets
    const projetsFiltres = mesProjets.filter(projet => {
        // Un projet est affiché s'il possède au moins un des tags sélectionnés
        // (Tu pourrais aussi adapter pour filtrer par catégorie exacte si tu ajoutes une clé 'categorie' dans tes données)
        return projet.tags.some(tag => activeFilters.has(tag));
    });

    afficherProjets(projetsFiltres);
}

document.addEventListener('DOMContentLoaded', initFiltres);



