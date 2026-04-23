// js/details.js
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const projet = mesProjets[id]; 

    const detailContainer = document.getElementById('detail-content');

    if (projet) {
        document.title = `${projet.titre} - Détails`;

        const categorieDisplay = projet.tags.length > 0 ? projet.tags[0] : "Projet";

        detailContainer.innerHTML = `
            <div class="row">
                <div class="col-lg-8">
                    <div class="mb-5">
                        <h1 class="project-title-main">${projet.titre}</h1>
                        <p class="project-category-sub">${categorieDisplay}</p>
                    </div>

                    <div class="row mb-4 align-items-stretch">
                        <div class="col-md-4">
                            <div class="tags-container-box">
                                ${projet.tags.map(t => `<div class="tag-item">${t}</div>`).join('')}
                            </div>
                        </div>
                        <div class="col-md-8">
                            <h3 class="section-title">Description détaillée du projet</h3>
                            <p class="section-text">${projet.descriptionComplete}</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4"></div> <div class="col-md-8">
                            <h3 class="section-title">Contraintes du projet</h3>
                            <p class="section-text">${projet.contraintes}</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="image-sidebar">
                        <img src="${projet.image}" alt="${projet.titre}" class="img-fluid rounded-4 shadow">
                    </div>
                </div>
            </div>
        `;
    }
});