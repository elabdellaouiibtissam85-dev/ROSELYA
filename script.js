const produits = [
    { id: 1, nom: "Essence de Coco", prix: 40, image: "images/coco.jpeg" },
    { id: 2, nom: "Fruit Rouge", prix: 40, image: "images/fruit-rouge.jpeg" },
    { id: 3, nom: "Vanille Royale", prix: 40, image: "images/vanille.jpeg" },
    { id: 4, nom: "Caramel Gourmand", prix: 40, image: "images/caramel.jpeg" },
    { id: 5, nom: "Chocolat Intense", prix: 40, image: "images/chocolat.jpeg" }
];

const packs = [
    { id: 101, nom: "Signature Royal", prix: 150, image: "images/pack-signature.jpeg" },
    { id: 102, nom: "Douceur Gourmande", prix: 130, image: "images/pack-douceur.jpeg" },
    { id: 103, nom: "L'Escale Exotique", prix: 140, image: "images/pack-exotique.jpeg" },
    { id: 104, nom: "Pack Bien-Être", prix: 120, image: "images/pack-bien-etre.jpeg" }
];

let panier = [];

function afficherBoutique() {
    const grid = document.getElementById('product-grid');
    produits.forEach(p => {
        grid.innerHTML += `
            <div class="product-card">
                <img src="${p.image}" alt="${p.nom}">
                <h3>${p.nom}</h3>
                <p><strong>${p.prix}€</strong></p>
                <button class="btn-gold" onclick="ajouterAuPanier(${p.id}, 'prod')">Ajouter au panier</button>
            </div>`;
    });

    const packGrid = document.getElementById('pack-grid');
    packs.forEach(pk => {
        packGrid.innerHTML += `
            <div class="product-card">
                <img src="${pk.image}" alt="${pk.nom}">
                <h3>${pk.nom}</h3>
                <p><strong>${pk.prix}€</strong></p>
                <button class="btn-gold" onclick="ajouterAuPanier(${pk.id}, 'pack')">Ajouter le Pack</button>
            </div>`;
    });
}

function ajouterAuPanier(id, type) {
    const item = type === 'prod' ? produits.find(p => p.id === id) : packs.find(p => p.id === id);
    panier.push(item);
    updateCart();
    document.getElementById('cart-sidebar').classList.add('active');
}

function updateCart() {
    const itemsCont = document.getElementById('cart-items');
    itemsCont.innerHTML = '';
    let total = 0;
    panier.forEach((item, index) => {
        total += item.prix;
        itemsCont.innerHTML += `<p>${item.nom} - ${item.prix}€</p>`;
    });
    document.getElementById('cart-count').innerText = panier.length;
    document.getElementById('cart-total').innerText = total;
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

window.onload = afficherBoutique;
