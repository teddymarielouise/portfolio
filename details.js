// On récupère le même tableau (normalement tu devrais le mettre dans un fichier data.js séparé)
const mesProjets = [ /* Copie-colle ton tableau ici ou importe-le */ ];

document.addEventListener('DOMContentLoaded', () => {
    // 1. On récupère l'ID dans l'URL (ex: ?id=1)
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const projet = mesProjets[id];

    const detailContainer = document.getElementById('detail-content');

    if (projet) {
        // 2. On affiche les données dynamiquement
        detailContainer.innerHTML = `
            <h1>${projet.titre}</h1>
            <img src="${projet.image}" style="max-width: 100%; border-radius: 15px;">
            <div class="my-4">
                ${projet.tags.map(t => `<span class="tag">${t}</span>`).join(' ')}
            </div>
            <p class="lead">${projet.description}</p>
            <div class="content-complet">
                <h3>À propos de ce projet</h3>
                <p>C'est ici que tu peux rajouter des détails plus longs...</p>
            </div>
        `;
    } else {
        detailContainer.innerHTML = "<h1>Projet introuvable</h1>";
    }
});