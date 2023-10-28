

let map = L.map('mi_mapa').setView([-40.7344343, -66.6176455], 15)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            }).addTo(map);
//agregar marcador
L.marker([-40.7344343, -66.6176455]).addTo(map).bindPopup("cordoba")
L.marker([-40.7344343, -66.6176455]).addTo(map).bindPopup("cordoba")
