const express = require('express');
const router = express.Router();

// Afşin District Sample Road Data
let streets = [
    { id: 1, name: "Eshab-ı Kehf Caddesi", type: "Asphalt", length: 5000, location: [38.2388, 36.9135] },
    { id: 2, name: "Afşin Çarşı Sokak", type: "Cobblestone", length: 1200, location: [38.2403, 36.9105] },
    { id: 3, name: "Cumhuriyet Bulvarı", type: "Asphalt", length: 3500, location: [38.2357, 36.9082] },
    { id: 4, name: "Atatürk Caddesi", type: "Asphalt", length: 4000, location: [38.2335, 36.9068] },
    { id: 5, name: "İstiklal Caddesi", type: "Paved", length: 2500, location: [38.2362, 36.9145] },
    { id: 6, name: "Kurtuluş Caddesi", type: "Asphalt", length: 3000, location: [38.2400, 36.9130] },
    { id: 7, name: "Şehitler Caddesi", type: "Cobblestone", length: 2000, location: [38.2341, 36.9125] },
    { id: 8, name: "Mimar Sinan Caddesi", type: "Asphalt", length: 2700, location: [38.2395, 36.9190] },
    { id: 9, name: "Gazi Caddesi", type: "Asphalt", length: 3200, location: [38.2378, 36.9156] },
    { id: 10, name: "Orta Sokak", type: "Paved", length: 1500, location: [38.2350, 36.9100] }
];

//CRUD APIs
// Add a new path
router.post('/', (req, res) => {
    const newStreet = req.body;
    newStreet.id = streets.length + 1;
    streets.push(newStreet);
    res.status(201).json(newStreet);
});

//Get the path list
router.get('/', (req, res) => {
    res.status(200).json(streets);
});

//Update an existing path
router.put('/:id', (req, res) => {
    const streetId = parseInt(req.params.id);
    const updatedStreet = req.body;

    let street = streets.find(s => s.id === streetId);
    if (street) {
        Object.assign(street, updatedStreet);
        res.status(200).json(street);
    } else {
        res.status(404).send({ message: 'Street not found' });
    }
});


