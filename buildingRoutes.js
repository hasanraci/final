const express = require('express');
const router = express.Router();

// Afşin District Sample Building Data
let buildings = [
    { id: 1, name: "AtlasKent Sitesi", type: "Residential", height: 55, location: [38.237158, 36.933287] },
    { id: 2, name: "Eshab-ı Kehf Külliye Camii", type: "Religious", height: 80, location: [38.243887, 36.914397] },
    { id: 3, name: "Afşin Deprem TOKİ Konutları", type: "Residential", height: 35, location: [38.218308, 36.917214] },
    { id: 4, name: "Afşin TOKİ", type: "Residential", height: 35, location: [38.224763, 36.884052] },
    { id: 5, name: "Afşin Devlet Hastanesi", type: "Health", height: 25, location: [38.236837, 36.896384] },
    { id: 6, name: "Kahramanmaraş Veteriner Hekimler Odası", type: "Office", height: 40, location: [38.239249, 36.900356] },
    { id: 7, name: "Afşin Halk Eğitimi Merkezi", type: "Community Center", height: 15, location: [38.241808, 36.909381] },
    { id: 8, name: "Afşin Otogarı", type: "Transport", height: 10, location: [38.244028, 36.911389] }
];

// CRUD API's
// Adding a new building
router.post('/', (req, res) => {
    const newBuilding = req.body;
    newBuilding.id = buildings.length + 1;
    buildings.push(newBuilding);
    res.status(201).json(newBuilding);
});

// Bina listesini alma
router.get('/', (req, res) => {
    res.status(200).json(buildings);
});

// Mevcut bir binayı güncelleme
router.put('/:id', (req, res) => {
    const buildingId = parseInt(req.params.id);
    const updatedBuilding = req.body;

    let building = buildings.find(b => b.id === buildingId);
    if (building) {
        Object.assign(building, updatedBuilding); // Mevcut binayı güncelle
        res.status(200).json(building);
    } else {
        res.status(404).send({ message: 'Building not found' });
    }
});

// Bir binayı silme
router.delete('/:id', (req, res) => {
    const buildingId = parseInt(req.params.id);
    
    const index = buildings.findIndex(b => b.id === buildingId);
    if (index !== -1) {
        buildings.splice(index, 1);
        res.status(200).send({ message: 'Building deleted' });
    } else {
        res.status(404).send({ message: 'Building not found' });
    }
});

module.exports = router;
