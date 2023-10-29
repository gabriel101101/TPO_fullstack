
//========================= API RIO NEGRO ====================

let map_rio_negro = L.map('rio_negro').setView([-40.7344343, -66.6176455], 15)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            }).addTo(map_rio_negro);
//agregar marcador
L.marker([-40.7344343, -66.6176455]).addTo(map_rio_negro).bindPopup("rio negro")
L.marker([-40.7344343, -66.6176455]).addTo(map_rio_negro).bindPopup("rio negro")

