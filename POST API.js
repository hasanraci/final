app.post('/api/schools', authenticateJWT, (req, res) => {
    const { name, type, students, location } = req.body;

    //Check data
    if (!name || !type || !students || !location || location.length !== 2) {
        return res.status(400).json({ message: 'Invalid data. Ensure name, type, students, and location are provided.' });
    }

    // Automatic ID assignment (highest ID + 1)
    const newId = schools.length ? Math.max(...schools.map(school => school.id)) + 1 : 1;
    
    //Create new school
    const school = { id: newId, name, type, students, location };

    // Add the school to the list
    schools.push(school);
    
    res.status(201).json(school);
});
