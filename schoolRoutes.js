const express = require('express');
const router = express.Router();

// Afşin District Sample School Data
let schools = [
    { id: 1, name: "Afşin Anadolu Lisesi", type: "Anadolu Lisesi", students: 1200, location: [38.255312, 36.920659] },
    { id: 2, name: "Afşin Fen Lisesi", type: "Fen Lisesi", students: 800, location: [37.404500, 36.711200] },
    { id: 3, name: "Afşin İmam Hatip Lisesi", type: "İmam Hatip Lisesi", students: 950, location: [37.402500, 36.715000] },
    { id: 4, name: "Afşin Sağlık Meslek Lisesi", type: "Sağlık Meslek Lisesi", students: 600, location: [37.403000, 36.717500] },
    { id: 5, name: "Afşin Eshabı Kehf Anadolu Lisesi", type: "Anadolu Lisesi", students: 1100, location: [37.401000, 36.709500] }
];

//CRUD APIs
// Add a new school
router.post('/', (req, res) => {
    const newSchool = req.body;
    newSchool.id = schools.length + 1;
    schools.push(newSchool);
    res.status(201).json(newSchool);
});

// Get the school list
router.get('/', (req, res) => {
    res.status(200).json(schools);
});

//Update an existing school
router.put('/:id', (req, res) => {
    const schoolId = parseInt(req.params.id);
    const updatedSchool = req.body;

    let school = schools.find(s => s.id === schoolId);
    if (school) {
        Object.assign(school, updatedSchool); //Update current school
        res.status(200).json(school);
    } else {
        res.status(404).send({ message: 'School not found' });
    }
});

// Delete a school
router.delete('/:id', (req, res) => {
    const schoolId = parseInt(req.params.id);
    
    const index = schools.findIndex(s => s.id === schoolId);
    if (index !== -1) {
        schools.splice(index, 1);
        res.status(200).send({ message: 'School deleted' });
    } else {
        res.status(404).send({ message: 'School not found' });
    }
});

module.exports = router;
