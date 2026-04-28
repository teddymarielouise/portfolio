// js/script.js
let activeFilters = new Set();

document.addEventListener('DOMContentLoaded', () => {
    afficherProjets(mesProjets);
    initFiltres();
    initModal(); // On initialise la modale au chargement
});

function afficherProjets(projetsA_Afficher) {
    const container = document.getElementById('container-cards');
    if (!container) return; 

    if (projetsA_Afficher.length === 0) {
        container.innerHTML = `<p class="text-center w-100 mt-4">Aucun projet ne correspond à ces filtres.</p>`;
        return;
    }

    const htmlComplet = projetsA_Afficher.map((projet, index) => {
        const tagsHTML = projet.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        // On récupère l'index global du projet dans mesProjets pour le lier au bouton
        const idGlobal = mesProjets.indexOf(projet); 

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
                            <button data-id="${idGlobal}" class="btn-infos btn-open-modal">En savoir plus</button>
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

// === LOGIQUE DE LA MODALE ===
function initModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;
    
    const closeBtn = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDesc = document.getElementById('modalDesc');
    const modalTags = document.getElementById('modalTags');
    const modalConstraints = document.getElementById('modalConstraints');

    // On écoute les clics sur le conteneur des cartes (Délégation d'événements)
    document.getElementById('container-cards').addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-open-modal')) {
            const projectId = e.target.getAttribute('data-id');
            const data = mesProjets[projectId];

            if (data) {
                // Remplissage des données
                modalTitle.textContent = data.titre;
                modalImage.src = data.image;
                modalDesc.textContent = data.descriptionComplete;
                modalConstraints.textContent = data.contraintes;
                
                // Création des tags pour la modale
                modalTags.innerHTML = data.tags.map(tag =>
                    `<span class="tag-pill-modal">${tag}</span>`
                ).join('');

                // Affichage
                document.body.style.overflow = 'hidden'; // Bloque le scroll de la page derrière
                modal.style.display = "block";
            }
        }
    });

    // Fermeture de la modale
    const closeModal = () => {
        modal.style.display = "none";
        document.body.style.overflow = ''; // Rétablit le scroll
    };

    closeBtn.onclick = closeModal;

    // Ferme la modale si on clique en dehors de la boîte blanche
    window.onclick = (e) => {
        if (e.target == modal) closeModal();
    };
}