

let map = L.map('mi_mapa').setView([-31.4200833, -64.1887761], 15)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            }).addTo(map);
//agregar marcador
L.marker([-31.4200833, -64.1887761]).addTo(map).bindPopup("cordoba")
L.marker([-31.4200833, -64.1887761]).addTo(map).bindPopup("cordoba")
