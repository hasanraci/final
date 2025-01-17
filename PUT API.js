app.put('/api/schools/:id', authenticateJWT, (req, res) => {
    const schoolId = parseInt(req.params.id);
    const updatedSchool = req.body;

    // Validate data
    if (!updatedSchool.name || !updatedSchool.type || !updatedSchool.students || !updatedSchool.location || updatedSchool.location.length !== 2) {
        return res.status(400).json({ message: 'Invalid data. Ensure name, type, students, and location are provided.' });
    }

    let school = schools.find(s => s.id === schoolId);
    if (school) {
        // Update school information
        school.name = updatedSchool.name || school.name;
        school.type = updatedSchool.type || school.type;
        school.students = updatedSchool.students || school.students;
        school.location = updatedSchool.location || school.location;

        res.status(200).json(school);
    } else {
        res.status(404).send({ message: 'School not found' });
    }
});
