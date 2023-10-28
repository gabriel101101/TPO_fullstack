

let map = L.map('mi_mapa').setView([-34.6036844, -58.3815591], 15)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            }).addTo(map);
//agregar marcador
L.marker([-34.6036844, -58.3815591]).addTo(map).bindPopup("cordoba")
L.marker([-34.6036844, -58.3815591]).addTo(map).bindPopup("cordoba")
