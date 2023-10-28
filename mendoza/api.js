

let map = L.map('mi_mapa').setView([-32.8894587, -68.8458386], 15)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            }).addTo(map);
//agregar marcador
L.marker([-32.8894587, -68.8458386]).addTo(map).bindPopup("cordoba")
L.marker([-32.8894587, -68.8458386]).addTo(map).bindPopup("cordoba")
